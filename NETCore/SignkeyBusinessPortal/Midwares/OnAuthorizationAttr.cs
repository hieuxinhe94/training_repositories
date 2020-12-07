using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SK.Entity.Common;
using System;

namespace SignkeyBusinessPortal.Midwares
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var userId = context.HttpContext.Items["UserId"];

            if (userId == null || (int)userId <= 0)
            {
                // not logged in
                context.Result = new JsonResult(new { message = "Unauthorized Signkey User" }) { StatusCode = StatusCodes.Status401Unauthorized };
            }
        }
    }
}
