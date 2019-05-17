using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.DirectoryServices.ActiveDirectory;
using System.Threading.Tasks;

namespace Engineering.API.Data
{
    public class UserRepository : IUserRepository
    {
        private string _domain = "LUCIDENERGY";
        private string _group = "Engineer_ESR";
        // private string _approver = "Mark Lane";
        private string _approver = "Michael Linden";
        public UserRepository()
        {
        }
        public PrincipalContext GetDomain()
        {
            PrincipalContext ctx = new PrincipalContext(ContextType.Domain, _domain);
            return ctx;
        }

        public IEnumerable<string> GetMembersOfGroup()
        {
            PrincipalContext ctx = new PrincipalContext(ContextType.Domain, _domain);
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx, _group);
            var users = grp.GetMembers(true);
            List<string> allUsers = new List<string>();

            foreach(UserPrincipal user in users) {
                allUsers.Add(user.DisplayName);
            }

            return allUsers;
        }

        public UserPrincipal GetUsername()
        {
            UserPrincipal username = UserPrincipal.Current;
            return username;
        }

        public bool IsAuthorizedToApproveRequest(string username)
        {
            if (username == _approver) {
                return true;
            }

            return false;
        }

        public bool IsAuthorizedToCreateRequest(UserPrincipal username, PrincipalContext ctx)
        {        
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx, _group);
            return username.IsMemberOf(grp);
            
        }
    }
}