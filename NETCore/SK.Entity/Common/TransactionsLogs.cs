using SK.Entity.Base;
using System; 

namespace SK.Entity.Common
{
    public class TransactionsLogs : BaseEntity
    {
        public DateTime ExecuteDate { get; set; }

        public string TransactionId { get; set; }
        public int UserId { get; set; }
        public string Message { get; set; }
        public string Info { get; set; }
        public TransactionTypes Type { get; set; }
        public TransactionStatus Status { get; set; }
        public DateTime CompletedDate { get; set; }
    }

    public enum TransactionStatus
    {
        Unknown = 0,
        Pending = 10,
        Done = 20,
        Rejected = 30,
        Expired = 40
    }

    public enum TransactionTypes
    {
        Unknown = 0,
        EmailVerification = 10 
    }
}
