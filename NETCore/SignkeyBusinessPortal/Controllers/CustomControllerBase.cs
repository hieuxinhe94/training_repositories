using Microsoft.AspNetCore.Mvc;
using SK.Entity.Base;
using SK.Entity.Common;
using SK.Service.Base;
using SK.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SignkeyBusinessPortal.Controllers
{
    public abstract class CustomControllerBase : ControllerBase
    {
        private readonly IUserService userService;

        public CustomControllerBase(IUserService _userService)
        {
            userService = _userService;
        }

        protected int GetCurrentUserProfileId()
        {
            return (int)HttpContext.Items["UserId"];
        }

        protected async Task<SkUser> GetCurrentUserProfile()
        {
            int id = (int)HttpContext.Items["UserId"];
            if (id <= 0)
            {
                return null;
            }
            return await userService.GetByIdAsync(id);
        }

    }

    [ApiController]
    public abstract class CrudCustomControllerBase<T> : CustomControllerBase where T : BaseEntity
    {
        private IUnitOfWork _unitOfWork;
        private readonly IUserService userService;

        protected CrudCustomControllerBase(IUnitOfWork unitOfWork, IUserService _userService) : base(_userService)
        {
            _unitOfWork = unitOfWork;
        }

        public IBaseService<K> ResolveService<K>()
        {
            Type listType = typeof(K);

            if (listType == typeof(SkUser))
            {
                return (IBaseService<K>)_unitOfWork.UserService;
            }

            throw new System.Exception("Can not solve this type.");
            // return null;
        }

        [HttpGet]
        public ICollection<K> GetAll<K>()
        {
            return  this.ResolveService<K>().GetAllWithoutPagination();
        }

        [HttpGet]
        public async Task<K> GetById<K>(int id)
        {
            return await this.ResolveService<K>().GetByIdAsync(id);
        }

    }
}
