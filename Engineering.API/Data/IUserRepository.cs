using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.Threading.Tasks;

namespace Engineering.API.Data
{
    public interface IUserRepository
    {
         string GetUsername();
         PrincipalContext GetDomain();
         bool IsAuthorizedToCreateRequest(UserPrincipal username, PrincipalContext ctx);
         bool IsAuthorizedToApproveRequest(string username);
         IEnumerable<KeyValuePair<string, string>> GetMembersOfGroup();
         UserPrincipal GetUserPrincipal();
    }
}