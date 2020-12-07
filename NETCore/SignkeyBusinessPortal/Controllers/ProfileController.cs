using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SK.Entity.Common;
using SK.Service.Base;
using SK.Service.Interfaces;
using SK.ViewModels.Mapper;
using System.Threading.Tasks;

namespace SignkeyBusinessPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : CrudCustomControllerBase<SkUser>
    {
        private readonly IUserService userService;
        private readonly IMapper mapper;
        private readonly IUnitOfWork _unitOfWork;
        public ProfileController(IUserService _userService, IMapper _mapper, IUnitOfWork unitOfWork)
            : base(unitOfWork, _userService)
        {
            userService = _userService;
            mapper = _mapper;
        }


        [HttpGet]
        [SignkeyBusinessPortal.Midwares.Authorize]
        public async Task<IActionResult> Get()
        {
            var user = await GetCurrentUserProfile();
            return Ok(mapper.Map<SkUserViewModel>(user));
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(base.GetAll<SkUser>());
        }
    }
}
