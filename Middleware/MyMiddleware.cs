using Microsoft.AspNetCore.Builder;

namespace MyApp.Middleware
{
    public class MyMiddleware
    {
        private readonly RequestDelegate _next;
        public MyMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var value = context.Connection.RemoteIpAddress.MapToIPv4().ToString();

            Console.WriteLine($"Request from IP: {value}");
            await _next(context);
        }

    }
}
