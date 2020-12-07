using SK.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace SK.Service.Base
{
    public interface IUnitOfWork
    {
        IEmailService EmailService { get; }

        
        ISettingService SettingService { get; }
        IUserService UserService { get; }
        void Save();

       
    }
}
