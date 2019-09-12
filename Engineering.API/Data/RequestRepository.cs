using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.DirectoryServices.ActiveDirectory;
using Engineering.API.Models;
using Microsoft.EntityFrameworkCore;
using System.DirectoryServices.AccountManagement;
using Engineering.API.Helpers;
using Microsoft.AspNetCore.Http;
using MimeKit;
using MailKit.Net.Smtp;

namespace Engineering.API.Data
{
    public class RequestRepository : IRequestRepository
    {
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IEmailSender _emailSender;
        public RequestRepository(DataContext context, IHttpContextAccessor httpContextAccessor, IEmailSender emailSender)
        {
            _emailSender = emailSender;
            _httpContextAccessor = httpContextAccessor;
            _context = context;
        }

        public async Task<string> AssignESR(bool isApproved)
        {
            DateTime currentDate = DateTime.Now.Date;
            string lastTwoDigitsOfYear = currentDate.ToString("yy");
            var storedRequests = await _context.Requests.ToListAsync();
            var selectedRequests = storedRequests
                .Where(r => r.Approved == isApproved)
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

            int maxESR = ESRsToParse.Length > 0 ? ESRsToParse.Max() + 1 : 1;
            string newESR = maxESR.ToString();
            string zerosToPad = "";
            string suffix = isApproved ? "-A" : "-N";

            for (int i = newESR.Length; i < 3; i++)
            {
                zerosToPad += "0";
            }
            return lastTwoDigitsOfYear + "-" + zerosToPad + newESR + suffix;
        }

        public async Task<PagedList<Request>> GetAssignedRequests(RequestParams requestParams)
        {

            var requests = _context.Requests.OrderBy(r => r.ESR).AsQueryable();

            if (!string.IsNullOrEmpty(requestParams.User))
            {
                requests = requests.Where(r => r.EngineerAssigned == requestParams.User);
            }
            return await PagedList<Request>.CreateAsync(requests, requestParams.PageNumber, requestParams.PageSize);
        }

        public async Task<Request> GetRequest(string ESR)
        {
            var request = await _context.Requests.FirstOrDefaultAsync(r => r.ESR == ESR);
            return request;
        }

        public async Task<PagedList<Request>> GetRequests(RequestParams requestParams)
        {
            var requests = _context.Requests.OrderBy(r => r.ESR).AsQueryable();

            if (requestParams.Approved)
            {
                requests = requests.Where(r => r.Approved == requestParams.Approved);
            }
            if (!string.IsNullOrEmpty(requestParams.Department))
            {
                requests = requests.Where(r => r.Department == requestParams.Department);
            }
            if (!string.IsNullOrEmpty(requestParams.LocationOfProject))
            {
                requests = requests.Where(r => r.LocationOfProject == requestParams.LocationOfProject);
            }
            if (!string.IsNullOrEmpty(requestParams.EngineerAssigned))
            {
                requests = requests.Where(r => r.EngineerAssigned == requestParams.EngineerAssigned);
            }
            if (!string.IsNullOrEmpty(requestParams.ESR))
            {
                requests = requests.Where(r => r.ESR == requestParams.ESR);
            }
            if (!string.IsNullOrEmpty(requestParams.OrderBy))
            {
                switch (requestParams.OrderBy)
                {
                    case "dateInitiated":
                        requests = requests.OrderByDescending(r => r.DateInitiated);
                        break;
                    case "approved":
                        requests = requests.OrderBy(r => r.Approved);
                        break;
                    default:
                        requests = requests.OrderBy(r => r.ESR);
                        break;
                }
            }

            return await PagedList<Request>.CreateAsync(requests, requestParams.PageNumber, requestParams.PageSize);
        }

        public async Task<bool> IsApproved(string ESR)
        {
            var request = await _context.Requests.SingleOrDefaultAsync(r => r.ESR == ESR);
            if (request != null)
                return request.Approved;

            return false;
        }

        public bool IsAuthorizedMember()
        {
            Domain ctx = Domain.GetCurrentDomain();
            PrincipalContext ctx2 = new PrincipalContext(ContextType.Domain, ctx.ToString());
            UserPrincipal user = UserPrincipal.Current;
            GroupPrincipal grp = GroupPrincipal.FindByIdentity(ctx2, "SSRS_Operations");

            return user.IsMemberOf(grp);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public bool SendEmail(string recipient, string subject, string ESR, string body)
        {
            var message = new MimeMessage();
            var linkToESR = " <a href=http://localhost:4200/requests/" + ESR + "> Click Here</a> to view the request.";
            message.From.Add(new MailboxAddress("ESR", "ESR@lucid-energy.com"));
            message.To.Add(new MailboxAddress(recipient));
            message.Subject = subject;
            message.Body = new TextPart("html")
            {
                Text = @"ESR " + ESR + body + linkToESR
            };

			using (var client = new SmtpClient ()) {
				client.ServerCertificateValidationCallback = (s,c,h,e) => true;

				client.Connect ("10.10.30.188", 25, false);

				client.Send (message);
				client.Disconnect (true);
			}
            return true;
        }

        public async Task<Request> SubmitRequest(Request request)
        {
            await _context.Requests.AddAsync(request);
            await _context.SaveChangesAsync();

            return request;
        }
    }
}