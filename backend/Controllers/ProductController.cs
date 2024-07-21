//Asp.net.core add
using Microsoft.AspNetCore.Mvc;
//backend models call
using backend.Models;
//use sqlClient
using System.Data.SqlClient;
//required async usage
using System.Threading.Tasks;

namespace backend.Controllers
{
    //ApiController added
    [ApiController]
    //api route defined
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly string _connectionString = configuration.GetConnectionString("DefaultConnection");

        //http post for url 
        [HttpPost("add-product")]

        //modal validation
        public async Task<IActionResult> AddProduct([FromForm] ProductModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // SQL conn
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync(); //conn opened async

                    //sql create insert
                    string query = "INSERT INTO Product (title, quantity) VALUES (@title, @quantity)";

                    //sql command added parameteres
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@title", model.ProductName);
                        command.Parameters.AddWithValue("@quantity", model.Quantity);

                        //run sql code
                        await command.ExecuteNonQueryAsync();
                    }
                }

                return Ok(new { message = "Product added successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while adding product", message = ex.Message });
            }
        }
    }
}
