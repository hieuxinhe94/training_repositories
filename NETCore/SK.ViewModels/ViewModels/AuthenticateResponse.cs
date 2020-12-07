using SK.Entity.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace SK.ViewModels.ViewModels
{
    public class AuthenticateResponse
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int ExpireInSeconds { get; set; }
        public string Username { get; set; }
        public string AccessToken { get; set; }


        public AuthenticateResponse(SkUser user, string token)
        {
            UserId = user.Id;
            ExpireInSeconds = 10000;
            FullName = user.FullName;
            Username = user.Username;
            AccessToken = token;
        }
    }
}
