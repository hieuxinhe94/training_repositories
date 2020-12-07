using SK.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SK.Service.Interfaces
{
    public interface IBaseService<T>
    {
        #region CRUD Basic

        /// <summary>
        ///  Return a list contains all of record from db
        /// </summary>
        /// <returns></returns>
        ICollection<T> GetAllWithoutPagination();

        /// <summary>
        ///  Return a list with pagination
        /// </summary>
        /// <param name="searchView"></param>
        /// <returns></returns>
        ICollection<T> GetAllWithPagination(int pageIndex, int pageSize);

        /// <summary>
        ///  Find a entity
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<T> GetByIdAsync(int id);

        /// <summary>
        /// Delete item from db
        /// </summary>
        /// <param name="id"></param>
        /// <returns>ServiceResponeCode</returns>
        Task<ServiceResponeCode> Delete(int id);

        /// <summary>
        ///  Update entity with id provided to new entity, not chage the id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="entityToUpdate"></param>
        /// <returns>ServiceResponeCode</returns>
        Task<ServiceResponeCode> UpdateAsync(int id, T entityToUpdate);

        /// <summary>
        ///  Create entity
        /// </summary>
        /// <param name="id"></param>
        /// <param name="entityToUpdate"></param>
        /// <returns>ServiceResponeCode</returns>
        Task<ServiceResponeCode> CreateAsync(T entityToCreate);

        #endregion
    }
}
