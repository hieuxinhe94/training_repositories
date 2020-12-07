using SK.Data.Database;
using SK.Data.Interfaces;
using SK.Entity.Common;
using SK.Service.Base;
using SK.Service.Interfaces;
using SK.ViewModels;
using System;
using System.Threading.Tasks;

namespace SK.Service.Implements
{
    public class UserService : BaseService<SkUser>, IUserService
    {
        IUserRepository userRepository;

        public UserService(ApplicationContext dbContext, IUserRepository _userRepository) : base(dbContext)
        {
            userRepository = _userRepository;
        }

        public async Task<SkUser> FindByEmailAndPassowrd(string email, string pwd)
        {
            var user = await userRepository.FindByEmail(email);
            // TODO: ipl password salt
            if (user != null && user.Password.Equals(GetEncriptedPassword(pwd)))
            {
                user.Password = null;
                return user;
            }

            return null;
        }

        public async Task<ServiceResponeCode> RegisterNew(string name,string email, string phoneNum, string pwd)
        {
            var user = await userRepository.FindByEmail(email);
          
            if (user != null)
            {
                return ServiceResponeCode.EXISTED;
            }

            user = new SkUser()
            {
                Id = 0,
                Username = email,
                FullName = name,
                Email = email,
                PhoneNumber = phoneNum,
                DateCreated = DateTime.Now,
                Password = GetEncriptedPassword(pwd),
                ReferralCode = await GetRandomCode()
            };
            try
            {
                await userRepository.CreateAsync(user);
            }
            catch 
            {
                return ServiceResponeCode.ERROR;
            }

            return ServiceResponeCode.OK;
        }

        private string GetEncriptedPassword(string pwd)
        {
            // TODO: ipl password salt
            return pwd;
        }

        private async Task<string> GetRandomCode()
        {
            bool isExisted = true;
            string code = "";

            while(isExisted)
            {
                code = string.Format("{0:N}", Guid.NewGuid().ToString("N").Substring(0, 6).ToUpper());

                isExisted = (await userRepository.FindByCode(code) != null);
            }

            return code;
        }
    }
}
