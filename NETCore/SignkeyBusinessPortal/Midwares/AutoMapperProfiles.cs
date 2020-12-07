using AutoMapper;
using SK.Entity.Common;
using SK.ViewModels.Mapper;
using SK.ViewModels.ViewModels;

namespace SignkeyBusinessPortal.Midwares
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<SettingKeyVal, SettingKeyValViewModel>().ReverseMap();
            CreateMap<SkUser, SkUserViewModel>().ReverseMap();
        }
    }
}
