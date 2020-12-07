using SK.Data.Base;
using SK.Entity.Common;
using System.Threading.Tasks;

namespace SK.Data.Interfaces
{
    public interface IUserRepository : IRepositoryBase<SkUser>
    {
          Task<SkUser> FindByEmail(string email);

        Task<SkUser> FindByCode(string code);
    }
}
