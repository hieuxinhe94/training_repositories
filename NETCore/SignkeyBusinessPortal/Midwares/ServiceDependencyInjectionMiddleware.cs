using Microsoft.Extensions.DependencyInjection;
using SK.Service.Implements;
using SK.Service.Interfaces;

namespace SignkeyBusinessPortal.Midwares
{
    public static class ServiceDependencyInjectionMiddleware
    {
        public static void RegisterServices(this IServiceCollection service)
        {
            service.AddScoped<IUserService, UserService>();
            service.AddScoped<ISettingService, SettingService>();
        }
    }
}
