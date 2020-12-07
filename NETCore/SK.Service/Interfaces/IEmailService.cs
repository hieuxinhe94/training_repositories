using SK.Entity.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SK.Service.Interfaces
{
    public interface IEmailService
    {
        void Send(EmailMessage emailMessage);
        Task<bool> VerifiedEmail(string transactionId, string email, int uid);
        Task<bool> CheckVerificationStatus(string userId);
        Task<string> SendVerify(SkUser user, string email);
        List<EmailMessage> ReceiveEmail(int maxCount = 10);
    }
}
