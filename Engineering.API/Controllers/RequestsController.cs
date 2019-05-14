using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public RequestsController(IRequestRepository repo, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetRequests()
        {
            var requests = await _repo.GetRequests();
            return Ok(requests);
        }

        [HttpGet("{ESR}")]
        public async Task<IActionResult> GetRequest(string ESR)
        {
            var request = await _repo.GetRequest(ESR);
            return Ok(request);
        }

        [HttpGet("unapproved")]
        public async Task<IActionResult> GetUnapproved()
        {
            var requests = await _repo.AssignESR();
            return Ok(requests);
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
            var newESR = await _repo.AssignESR();

            var requestToPost = new Request
            {
                ESR = newESR.ToString(),
                DateInitiated = DateTime.Now.Date,
                RequestedDateForCompletion = requestForSubmittalDto.RequestedDateForCompletion,
                InitiatedBy = requestForSubmittalDto.InitiatedBy,
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
    }
}
