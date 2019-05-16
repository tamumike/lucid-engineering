using AutoMapper;
using Engineering.API.Dtos;
using Engineering.API.Models;

namespace Engineering.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Request, RequestsForListDto>();
            CreateMap<Request, RequestForDetailedDto>();
            CreateMap<RequestForApprovalDto, Request>();
            CreateMap<RequestForSubmittalDto, Request>();
        }
    }
}