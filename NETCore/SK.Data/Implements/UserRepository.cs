using Microsoft.EntityFrameworkCore;
using SK.Data.Base;
using SK.Data.Database;
using SK.Data.Interfaces;
using SK.Entity.Common;
using System.Threading.Tasks;

namespace SK.Data.Implements
{
    public class UserRepository : RepositoryBase<SkUser>, IUserRepository
    {
        private ApplicationContext context;
        public UserRepository(ApplicationContext _context) : base(_context)
        {
            context = _context;
        }

        public async Task<SkUser> FindByCode(string code)
        {
            return await context.SkUser.FirstOrDefaultAsync(t => code.Equals(t.ReferralCode));
        }

        public async Task<SkUser> FindByEmail(string email)
        {
           return await context.SkUser.FirstOrDefaultAsync(t => email.Equals(t.Email));
        }
    }
}