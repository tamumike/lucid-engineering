using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.Threading.Tasks;

namespace Engineering.API.Data
{
    public interface IUserRepository
    {
         UserPrincipal GetUsername();
         PrincipalContext GetDomain();
         bool IsAuthorizedToCreateRequest(UserPrincipal username, PrincipalContext ctx);
         bool IsAuthorizedToApproveRequest(string username);
         IEnumerable<string> GetMembersOfGroup();
    }
}