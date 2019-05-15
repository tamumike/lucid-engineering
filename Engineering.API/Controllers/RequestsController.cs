using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Engineering.API.Data;
using Engineering.API.Dtos;
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

        public RequestsController(IRequestRepository repo, IHttpContextAccessor httpContextAccessor, IMapper mapper)
        {
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetRequests()
        {
            var requests = await _repo.GetRequests();
            var requestsToReturn = _mapper.Map<IEnumerable<RequestsForListDto>>(requests);
            return Ok(requestsToReturn);
        }

        [HttpGet("{ESR}")]
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

            var requestToPost = new Request
            {
                ESR = newESR.ToString(),
                DateInitiated = DateTime.Now.Date,
                RequestedDateForCompletion = requestForSubmittalDto.RequestedDateForCompletion,
                InitiatedBy = "mlinden",
                Group = requestForSubmittalDto.Group,
                LocationOfProject = requestForSubmittalDto.LocationOfProject,
                Description = requestForSubmittalDto.Description,
                Approved = false,
                EngineerAssigned = null,
                DateCompleted = null
            };

            if (requestToPost.RequestedDateForCompletion <= DateTime.Now.Date)
                return BadRequest("The completion date is invalid.");

            var postedRequest = await _repo.SubmitRequest(requestToPost);
            return StatusCode(201);
        }

        [HttpPut("{ESR}")]
        public async Task<IActionResult> ApproveRequest(string ESR, RequestForApprovalDto requestForApprovalDto)
        {
            if (await _repo.IsApproved(ESR))
                return BadRequest("Already Approved");
                
            var requestFromRepo = await _repo.GetRequest(ESR);

            requestFromRepo.ESR = await _repo.AssignESR(true);

            _mapper.Map(requestForApprovalDto, requestFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Approving request {ESR} failed on save.");
        }
    }
}
