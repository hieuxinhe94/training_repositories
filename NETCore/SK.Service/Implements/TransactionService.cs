using SK.Data.Database;
using SK.Data.Interfaces;
using SK.Entity.Common;
using SK.Service.Base;
using SK.Service.Interfaces;

namespace SK.Service.Implements
{
    public class TransactionService : BaseService<TransactionsLogs>, ITransactionService
    {
        private readonly ApplicationContext _dbContext;

        public TransactionService(ApplicationContext dbContext) : base(dbContext)
        {
        }

    }
}
