using SK.Entity.Common;
using SK.ViewModels;
using System.Threading.Tasks;

namespace SK.Service.Interfaces
{
    public interface IUserService : IBaseService<SkUser>
    {
        Task<SkUser> FindByEmailAndPassowrd(string email, string pwd);

        Task<ServiceResponeCode> RegisterNew(string name, string email, string phoneNum, string pwd);
    }
}
