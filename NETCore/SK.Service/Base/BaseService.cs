using Microsoft.EntityFrameworkCore;
using SK.Data.Database;
using SK.Entity.Base;
using SK.Service.Interfaces;
using SK.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SK.Service.Base
{
    public class BaseService<T> : IBaseService<T> where T : BaseEntity
    {
        private readonly ApplicationContext _dbContext;

        public BaseService(ApplicationContext dbContext)
        {
            this._dbContext = dbContext;
        }

        Task<ServiceResponeCode> IBaseService<T>.CreateAsync(T entityToCreate)
        {
            try
            {
                this._dbContext.AddAsync<T>(entityToCreate);
                return Task.FromResult(ServiceResponeCode.OK);
            }
            catch (System.Exception)
            {
                return Task.FromResult(ServiceResponeCode.ERROR);
                throw;
            }
        }

        Task<ServiceResponeCode> IBaseService<T>.Delete(int id)
        {
            if (id > 0  )
            {
                var entity = _dbContext.Set<T>().FirstOrDefault(t => t.Id == id);

                if (entity != null)
                {
                    _dbContext.Set<T>().Remove(entity);
                    return Task.FromResult(ServiceResponeCode.OK);
                }
            }

            return Task.FromResult(ServiceResponeCode.NOT_FOUND);
        }

        ICollection<T> IBaseService<T>.GetAllWithoutPagination()
        {
            return _dbContext.Set<T>().ToList();
        }

        ICollection<T> IBaseService<T>.GetAllWithPagination(int pageIndex, int pageSize)
        {
            throw new System.NotImplementedException();
        }

        Task<T> IBaseService<T>.GetByIdAsync(int id)
        {
            return _dbContext.Set<T>().FirstOrDefaultAsync(t => t.Id == id);
        }

        Task<ServiceResponeCode> IBaseService<T>.UpdateAsync(int id, T entityToUpdate)
        {
            throw new System.NotImplementedException();
        }
    }
}
