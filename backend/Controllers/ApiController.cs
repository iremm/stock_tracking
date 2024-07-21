using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        [HttpGet("get-values")] // GET api/api/get-values
        public IActionResult Get()
        {
            var values = new string[] { "Value1", "Value2", "Value3" };
            return Ok(values);
        }
    }
}
