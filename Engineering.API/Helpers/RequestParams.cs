namespace Engineering.API.Helpers
{
    public class RequestParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 20;
        public int PageSize
        {
            get { return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}
        }

        public string Group { get; set; }
        public bool Approved { get; set; }
        public string LocationOfProject { get; set; }
        public string OrderBy { get; set; }
        
    }
}