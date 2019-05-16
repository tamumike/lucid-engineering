using System.DirectoryServices.AccountManagement;
using System.DirectoryServices.ActiveDirectory;
using System.Threading.Tasks;

namespace Engineering.API.Data
{
    public class UserRepository : IUserRepository
    {
        private string _domain = "LUCIDENERGY";
        public UserRepository()
        {
        }
        public PrincipalContext GetDomain()
        {
            PrincipalContext ctx = new PrincipalContext(ContextType.Domain, _domain);
            return ctx;
        }

        public UserPrincipal GetUsername()
        {
            UserPrincipal username = UserPrincipal.Current;
            return username;
        }

        public bool IsAuthorizedToApproveRequest(string username)
        {
            if (username == "Mark Lane") {
                return true;
            }

            return false;
        }

        public bool IsAuthorizedToCreateRequest(UserPrincipal username, PrincipalContext ctx)
        {
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx, "Engineer_ESR");
            return username.IsMemberOf(grp);
        }
    }
}