using Microsoft.Extensions.DependencyInjection;
using SK.Data.Base;
using SK.Data.Implements;
using SK.Data.Interfaces;

namespace SignkeyBusinessPortal.Midwares
{
    public static class RepositoryDependencyInjectionMiddleware
    {
        public static void RegisterRepositories(this IServiceCollection service)
        {
            service.AddSingleton(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            service.AddScoped<ISettingRepository, SettingRepository>();
            service.AddScoped<IUserRepository, UserRepository>();

        }
    }
}
