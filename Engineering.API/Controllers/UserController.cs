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
    public string GetUsername()
    {
        var username = _repo.GetUsername();
        return username.ToString();
    }

    [HttpGet("authorizedtocreate")]
    public bool IsAuthorizedToCreateRequest()
    {
        var username = _repo.GetUsername();
        var domain = _repo.GetDomain();

        return _repo.IsAuthorizedToCreateRequest(username, domain);
    }

    [HttpGet("authorizedtoapprove")]
    public bool IsAuthorizedToApproveRequest()
    {
        var username = _repo.GetUsername();

        return _repo.IsAuthorizedToApproveRequest(username.ToString());
    }

    }
}