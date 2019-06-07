using System;
using System.ComponentModel.DataAnnotations;
using Engineering.API.Data;

namespace Engineering.API.Dtos
{
    public class RequestForSubmittalDto
    {
        [Key]
        public int Id { get; set; }
        public string ESR { get; set; }
        public DateTime DateInitiated { get; set; }
        [Required]
        public DateTime RequestedDateForCompletion { get; set; }
        [Required]
        public string InitiatedBy { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string LocationOfProject { get; set; }
        [Required]
        public string Description { get; set; }
        public bool Approved { get; set; }
        public string EngineerAssigned { get; set; }
        public DateTime? DateCompleted { get; set; }
        public int Priority { get; set; }
        
        public RequestForSubmittalDto()
        {
            DateCompleted = null;
            DateInitiated = DateTime.Now.Date;
            Approved = false;
            EngineerAssigned = null;
        }
    }
}