using SK.Data.Base;
using SK.Data.Database;
using SK.Data.Interfaces;
using SK.Entity.Common;

namespace SK.Data.Implements
{
    public class SettingRepository : RepositoryBase<SettingKeyVal>, ISettingRepository
    {
        public SettingRepository(ApplicationContext context) : base(context)
        {

        }
    }
}