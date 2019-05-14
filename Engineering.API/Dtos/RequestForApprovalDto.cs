using System;

namespace Engineering.API.Dtos
{
    public class RequestForApprovalDto
    {
        public DateTime RequestedDateForCompletion { get; set; }
        public string Group { get; set; }
        public string LocationOfProject { get; set; }
        public string Description { get; set; }
        public bool Approved { get; set; }
        public string EngineerAssigned { get; set; }
    }
}