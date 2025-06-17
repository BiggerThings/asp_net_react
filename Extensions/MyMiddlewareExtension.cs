using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System;

namespace MyApp.Middleware
{
    public static class MyMiddlewareExtension
    {
        public static IApplicationBuilder UseMyMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MyMiddleware>();
        }
    }
}