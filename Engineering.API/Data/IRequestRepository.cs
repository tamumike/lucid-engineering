using System.Collections.Generic;
using System.Threading.Tasks;
using Engineering.API.Models;

namespace Engineering.API.Data
{
    public interface IRequestRepository
    {
        Task<IEnumerable<Request>> GetRequests();
        Task<Request> GetRequest(string ESR);
        Task<Request> SubmitRequest(Request request);
        Task<Request> ApproveRequest(Request request);
        Task<string> AssignESR();
        bool IsAuthorizedMember();
    }
}