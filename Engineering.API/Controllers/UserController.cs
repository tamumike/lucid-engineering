using System;
using System.Collections.Generic;
using Engineering.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Engineering.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }

    [HttpGet("username")]
    public ActionResult<string> GetUsername()
    {
        // var user = _repo.GetUsername();
        return Environment.UserName;
    }

    [HttpGet("authorizedtocreate")]
    public bool IsAuthorizedToCreateRequest()
    {
        var username = _repo.GetUserPrincipal();
        var domain = _repo.GetDomain();

        return _repo.IsAuthorizedToCreateRequest(username, domain);
        
    }

    [HttpGet("groupmembers")]
    public IEnumerable<KeyValuePair<string, string>> GetMembersOfGroup() {

        var members = _repo.GetMembersOfGroup();

        return members;
    }

    [HttpGet("authorizedtoapprove")]
    public bool IsAuthorizedToApproveRequest()
    {
        var username = _repo.GetUsername();

        return _repo.IsAuthorizedToApproveRequest(username.ToString());
    }

    }
}