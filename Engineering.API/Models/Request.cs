using System;
using System.ComponentModel.DataAnnotations;

namespace Engineering.API.Models
{
    public class Request
    {
        [Key]
        [Required]
        public int ESR { get; set; }
        [Required]
        public DateTime DateInitiated { get; set; }
        [Required]
        public DateTime RequestedDateForCompletion { get; set; }
        [Required]
        public string InitiatedBy { get; set; }
        [Required]
        public string Group { get; set; }
        [Required]
        public string LocationOfProject { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool Approved { get; set; }
        [Required]
        public string EngineerAssigned { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}