using System.Collections.Generic;
using System.Threading.Tasks;
using Engineering.API.Helpers;
using Engineering.API.Models;

namespace Engineering.API.Data
{
    public interface IRequestRepository
    {
        Task<PagedList<Request>> GetRequests(RequestParams requestParams);
        Task<Request> GetRequest(string ESR);
        Task<PagedList<Request>> GetAssignedRequests(RequestParams requestParams);
        Task<Request> SubmitRequest(Request request);
        Task<string> AssignESR(bool isApproved);
        bool IsAuthorizedMember();
        Task<bool> SaveAll();
        Task<bool> IsApproved(string ESR);
    }
}