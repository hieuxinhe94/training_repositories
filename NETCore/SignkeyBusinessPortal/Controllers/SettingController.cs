using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SK.Service.Interfaces;

namespace SignkeyBusinessPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : Controller
    {
        private readonly ISettingService settingService;

        private readonly IMapper mapper;

        public SettingController(IMapper _mapper, ISettingService _settingService)
        {
            settingService = _settingService;
            mapper = _mapper;
        }

        // GET: api/Setting
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(settingService.GetAllWithoutPagination());
        }
    }
}
