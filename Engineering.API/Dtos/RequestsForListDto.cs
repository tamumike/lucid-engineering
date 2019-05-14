using System;
using System.ComponentModel.DataAnnotations;

namespace Engineering.API.Dtos
{
    public class RequestsForListDto
    {
        [Key]
        public int Id { get; set; }
        public string ESR { get; set; }
        public DateTime DateInitiated { get; set; }
        public DateTime RequestedDateForCompletion { get; set; }
        public string InitiatedBy { get; set; }
        public string Group { get; set; }
        // public string Description { get; set; }
        public string LocationOfProject { get; set; }
        public bool Approved { get; set; }
        public string EngineerAssigned { get; set; }
        // public DateTime? DateCompleted { get; set; }
    }
}