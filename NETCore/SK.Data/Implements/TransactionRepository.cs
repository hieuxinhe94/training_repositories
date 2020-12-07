//using Microsoft.EntityFrameworkCore;
//using SK.Data.Base;
//using SK.Data.Database;
//using SK.Data.Interfaces;
//using SK.Entity.Common;
//using System.Threading.Tasks;

//namespace SK.Data.Implements
//{
//    public class TransactionRepository : RepositoryBase<TransactionsLogs>, ITransactionRepository
//    {
//        private ApplicationContext context;
//        public TransactionRepository(ApplicationContext _context) : base(_context)
//        {
//            context = _context;
//        }

//        public async Task<TransactionsLogs> FindByTransactionIdAsync(string transactionId)
//        {
//            return await context.TransactionsLogs.FirstOrDefaultAsync(t => transactionId.Equals(t.TransactionId));
//        }
//    }
//}