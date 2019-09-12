namespace Engineering.API.Dtos
{
    public class RequestForUpdateDto
    {
        public string Department { get; set; }
        public string LocationOfProject { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public int Priority { get; set; }
        public string EngineerAssigned { get; set; }
        public string Comments { get; set; }
    }
}