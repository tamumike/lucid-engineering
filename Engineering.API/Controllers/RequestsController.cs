using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Engineering.API.Data;
using Engineering.API.Dtos;
using Engineering.API.Helpers;
using Engineering.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Engineering.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase
    {
        private readonly IRequestRepository _repo;
        private readonly IHttpContextAccessor _httpContextAccessor;
        // private string _user;
        private readonly IMapper _mapper;
        private readonly IUserRepository _urepo;
        private string _user;

        public RequestsController(IRequestRepository repo, IHttpContextAccessor httpContextAccessor, IMapper mapper, IUserRepository urepo)
        {
            _urepo = urepo;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
            _repo = repo;
            _user = _urepo.GetUsername();
        }

        [HttpGet]
        public async Task<IActionResult> GetRequests([FromQuery]RequestParams requestParams)
        {
            var requests = await _repo.GetRequests(requestParams);

            var requestsToReturn = _mapper.Map<IEnumerable<RequestsForListDto>>(requests);

            Response.AddPagination(requests.CurrentPage, requests.PageSize,
                requests.TotalCount, requests.TotalPages);

            return Ok(requestsToReturn);
        }

        [HttpGet("assigned")]
        public async Task<IActionResult> GetAssignedRequests([FromQuery]RequestParams requestParams)
        {
            requestParams.User = _user;

            var requests = await _repo.GetAssignedRequests(requestParams);

            var requestsToReturn = _mapper.Map<IEnumerable<RequestsForListDto>>(requests);

            Response.AddPagination(requests.CurrentPage, requests.PageSize,
                requests.TotalCount, requests.TotalPages);

            return Ok(requestsToReturn);
        }

        [HttpGet("{ESR}", Name = "GetRequest")]
        public async Task<IActionResult> GetRequest(string ESR)
        {
            var request = await _repo.GetRequest(ESR);
            var requestToReturn = _mapper.Map<RequestForDetailedDto>(request);
            return Ok(request);
        }

        [HttpGet("domain")]
        public bool GetDomain()
        {
            // _user = _httpContextAccessor.HttpContext.User.Identity.Name;
            var domain = _repo.IsAuthorizedMember();
            return domain;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> Submit(RequestForSubmittalDto requestForSubmittalDto)
        {
            var newESR = await _repo.AssignESR(false);

            var requestToPost = _mapper.Map<Request>(requestForSubmittalDto);

            if (requestToPost.RequestedDateForCompletion <= DateTime.Now.Date)
                return BadRequest("The completion date is invalid."); //CHECK THIS OUT

            requestToPost.ESR = newESR.ToString();

            var postedRequest = await _repo.SubmitRequest(requestToPost);

            var requestToReturn = _mapper.Map<RequestForDetailedDto>(postedRequest);

            return CreatedAtRoute("GetRequest", new { controller = "requests", ESR = postedRequest.ESR }, requestToReturn);
        }

        [HttpPut("{ESR}")]
        public async Task<IActionResult> ApproveRequest(string ESR, RequestForApprovalDto requestForApprovalDto)
        {
            var address = "mlinden@lucid-energy.com";
            var subject = "*TEST*You have been assigned a Service Request*TEST*";

            if (await _repo.IsApproved(ESR))
                return BadRequest("Already Approved");

            var requestFromRepo = await _repo.GetRequest(ESR);

            if (requestForApprovalDto.EngineerAssigned != requestFromRepo.EngineerAssigned)
                _repo.SendEmail(address, subject, requestFromRepo.ESR, " has been assigned to you.");

            if (requestForApprovalDto.Comments != requestFromRepo.Comments && !requestForApprovalDto.Approved)
                _repo.SendEmail(address, "Service Request Not Approved", requestFromRepo.ESR, " was not approved.");

            var requestToReturn = _mapper.Map(requestForApprovalDto, requestFromRepo);

            if (requestForApprovalDto.Approved)
            {
                requestFromRepo.ESR = await _repo.AssignESR(true);
                _repo.SendEmail(address, subject, requestFromRepo.ESR, " has been assigned to you.");
            }

            if (await _repo.SaveAll())
                return CreatedAtRoute("GetRequest", new { controller = "requests", ESR = requestFromRepo.ESR }, requestToReturn);

            throw new Exception($"Approving request {ESR} failed on save.");
        }

        [HttpPut("status/{ESR}")]
        public async Task<IActionResult> UpdateStatus(string ESR, RequestForStatusChangeDto requestForStatusChangeDto)
        {
            var requestFromRepo = await _repo.GetRequest(ESR);

            var requestToReturn = _mapper.Map(requestForStatusChangeDto, requestFromRepo);

            if (await _repo.SaveAll())
                return Ok(requestFromRepo);

            throw new Exception($"Error updating the status");
        }

        [HttpPut("update/{ESR}")]
        public async Task<IActionResult> UpdateRequest(string ESR, RequestForUpdateDto requestForUpdateDto)
        {
            var address = "mlinden@lucid-energy.com";
            var subject = "*TEST*You have been assigned a Service Request*TEST*";
            var requestFromRepo = await _repo.GetRequest(ESR);

            if (requestForUpdateDto.EngineerAssigned != requestFromRepo.EngineerAssigned)
                _repo.SendEmail(address, subject, requestFromRepo.ESR, " has been assigned to you.");
            
            var requestToReturn = _mapper.Map(requestForUpdateDto, requestFromRepo);

            if(await _repo.SaveAll())
                return Ok(requestFromRepo);

            throw new Exception($"Error updating the request.");
        }

        [HttpPut("complete/{ESR}")]
        public async Task<IActionResult> CompleteRequest(string ESR, RequestForCompleteDto requestForCompleteDto)
        {
            var requestFromRepo = await _repo.GetRequest(ESR);

            var requestToReturn = _mapper.Map(requestForCompleteDto, requestFromRepo);

            requestFromRepo.DateCompleted = DateTime.Now.Date;
            requestFromRepo.Status = "Completed";

            if(await _repo.SaveAll())
                return Ok(requestFromRepo);

            throw new Exception($"Error updating the request.");                
        }

        [HttpPut("cancel/{ESR}")]
        public async Task<IActionResult> CancelRequest(string ESR, RequestForCancelDto requestForCancelDto)
        {
            var requestFromRepo = await _repo.GetRequest(ESR);

            var requestToReturn = _mapper.Map(requestForCancelDto, requestFromRepo);

            requestFromRepo.Status = "Canceled";
            requestFromRepo.DateCompleted = null;

            if(await _repo.SaveAll())
                return Ok(requestFromRepo);

            throw new Exception($"Error updating the request.");   
        }
    }
}
