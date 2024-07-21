using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Microsoft.AspNetCore.Http;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public HomeController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet("google")]
        public async Task<IActionResult> GetGoogleData()
        {
            try
            {
                var client = _clientFactory.CreateClient();
                var response = "ok";
                return Ok(response); // Return the response from Google
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}
