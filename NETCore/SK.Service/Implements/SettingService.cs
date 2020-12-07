using SK.Data.Database;
using SK.Data.Interfaces;
using SK.Entity.Common;
using SK.Service.Base;
using SK.Service.Interfaces;

namespace SK.Service.Implements
{
    public class SettingService : BaseService<SettingKeyVal>, ISettingService
    {
        ISettingRepository settingRepository;
        private readonly ApplicationContext _dbContext;

        public SettingService(ApplicationContext dbContext, ISettingRepository _settingRepository): base(dbContext)
        {
            settingRepository = _settingRepository;
        }

    }
}
