using SK.Service.Interfaces;
using System; 

namespace SK.Service.Base
{
    public class UnitOfWork : IUnitOfWork
    {
        private IEmailService _emailService;
        private ISettingService _settingService;
        private IUserService _userService;

        public UnitOfWork(IEmailService emailService, ISettingService settingService, IUserService userService)
        {
            _emailService = emailService;
            _settingService = settingService;
            _userService = userService;
        }

        public IEmailService EmailService => _emailService;

        public ISettingService SettingService => _settingService;

        public IUserService UserService => _userService;

        public void Save()
        {
            throw new NotImplementedException();
        }
    }
}
