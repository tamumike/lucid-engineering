using System;
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
        private string _approver = "mlane";
        // private string _approver = "mlinden";
        public UserRepository()
        {
        }
        public PrincipalContext GetDomain()
        {
            PrincipalContext ctx = new PrincipalContext(ContextType.Domain, _domain);
            return ctx;
        }

        public IEnumerable<KeyValuePair<string, string>> GetMembersOfGroup()
        {
            PrincipalContext ctx = new PrincipalContext(ContextType.Domain, _domain);
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx, _group);
            var users = grp.GetMembers(true);
            List<KeyValuePair<string, string>> allUsers = new List<KeyValuePair<string, string>>();

            foreach(UserPrincipal user in users) {
                allUsers.Add(new KeyValuePair<string, string>(user.Name, user.SamAccountName));
            }

            return allUsers;
        }

        public string GetUsername()
        {
            string user = Environment.UserName;
            // string user = "mlinden";
            return user;
        }

        public UserPrincipal GetUserPrincipal()
        {
            UserPrincipal user = UserPrincipal.Current;
            return user;
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