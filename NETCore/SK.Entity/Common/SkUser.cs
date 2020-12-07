using SK.Entity.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace SK.Entity.Common
{
    public class SkUser: BaseEntity
    {
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PaypalEmail { get; set; }
        public string PhoneNumber { get; set; }
        public string ReferralCode { get; set; }
        public string ReferralLink { get; set; }
        //[JsonIgnore]
        public string Password { get; set; }

        public SkUser()
        {

        }
    }
}
