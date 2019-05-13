using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Engineering.API.Data;
using Engineering.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Engineering.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase
    {
        private readonly DataContext _context;
        public RequestsController(DataContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var requests = await _context.Requests.ToListAsync();
            return Ok(requests);
        }

        // GET api/requests/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var request = await _context.Requests.FirstOrDefaultAsync(r => r.ESR == id);
            return Ok(request);
        }

        // POST api/requests
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/requests/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/requests/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
