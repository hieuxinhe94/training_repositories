using SK.Data.Base;
using SK.Entity.Common;
using System.Threading.Tasks;

namespace SK.Data.Interfaces
{
    public interface ITransactionRepository : IRepositoryBase<TransactionsLogs>
    {
        Task<TransactionsLogs> FindByTransactionIdAsync(string transactionId);

    }
}
