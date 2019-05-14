using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.DirectoryServices.ActiveDirectory;
using Engineering.API.Models;
using Microsoft.EntityFrameworkCore;
using System.DirectoryServices.AccountManagement;

namespace Engineering.API.Data
{
    public class RequestRepository : IRequestRepository
    {
        private readonly DataContext _context;
        public RequestRepository(DataContext context)
        {
            _context = context;

        }
        public Task<Request> ApproveRequest(Request request)
        {
            throw new System.NotImplementedException();
        }

        public async Task<string> AssignESR()
        {
            DateTime currentDate = DateTime.Now.Date;
            string lastTwoDigitsOfYear = currentDate.ToString("yy");
            var storedRequests = await _context.Requests.ToListAsync();
            var selectedRequests = storedRequests
                .Where(r => r.Approved == false)
                .ToArray();
            int[] ESRsToParse = new int[selectedRequests.Length];

            for (int i = 0; i < selectedRequests.Length; i++)
            {
                int number;
                string num = selectedRequests[i].ESR.Split("-")[1];
                if (Int32.TryParse(num, out number))
                {
                    ESRsToParse[i] = number;
                }
            }

            int maxESR = ESRsToParse.Max() + 1;
            string newESR = maxESR.ToString();            
            string zerosToPad = "";

            for (int i = newESR.Length; i < 3; i++)
            {
                zerosToPad += "0";
            }
            return lastTwoDigitsOfYear + "-" + zerosToPad + newESR + "-N";
        }

        public async Task<Request> GetRequest(string ESR)
        {
            var request = await _context.Requests.FirstOrDefaultAsync(r => r.ESR == ESR);
            return request;
        }

        public async Task<IEnumerable<Request>> GetRequests()
        {
            var requests = await _context.Requests.ToListAsync();
            return requests;
        }

        public bool IsAuthorizedMember()
        {
            Domain ctx = Domain.GetCurrentDomain();
            PrincipalContext ctx2 = new PrincipalContext(ContextType.Domain, ctx.ToString());
            UserPrincipal user = UserPrincipal.Current;
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx2, "SSRS_Operations");

            return user.IsMemberOf(grp);
        }

        public async Task<Request> SubmitRequest(Request request)
        {
            await _context.Requests.AddAsync(request);
            await _context.SaveChangesAsync();
            return request;
        }
    }
}