using SK.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SK.Data.Base
{
    public interface IRepositoryBase<TEntity> where TEntity : BaseEntity
    {
        /// <summary>
        /// Don’t want to return full list, It be able to use to further process the query
        /// </summary>
        /// <returns></returns>
        IQueryable<TEntity> GetAll();

        /// <summary>
        /// The methods will be async because we will be making use of Entity Framework’s async support
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TEntity> GetByIdAsync(int id);

        /// <summary>
        /// The methods will be async because we will be making use of Entity Framework’s async support
        /// </summary>
        /// <param name="TEntity">instance of entity</param>
        /// <returns></returns>
        Task CreateAsync(TEntity entity);

        /// <summary>
        /// The methods will be async because we will be making use of Entity Framework’s async support
        /// </summary>
        /// <param name="id">Current id of instance</param>
        /// <param name="TEntity"> value to be updated</param>
        /// <returns></returns>
        Task UpdateAsync(int id, TEntity entity);

        /// <summary>
        /// The methods will be async because we will be making use of Entity Framework’s async support
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task DeleteAsync(int id);
    }
}
