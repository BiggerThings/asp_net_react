using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello from ASP.NET Core API!");
    }
 }
// This controller responds to GET requests at the route /api/hello