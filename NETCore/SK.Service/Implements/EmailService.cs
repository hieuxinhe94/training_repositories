//using MailKit.Net.Smtp;
//using MailKit.Security;
//using MimeKit;
//using MimeKit.Text;
//using Org.BouncyCastle.Asn1.Ocsp;
//using SK.Data.Interfaces;
//using SK.Entity.Common;
//using SK.Service.Interfaces;
//using SK.ViewModels.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Security.Authentication;
//using System.Text;
//using System.Threading.Tasks;

//namespace SK.Service.Implements
//{
//    public class EmailService : IEmailService
//    {
//        private readonly IEmailConfiguration _emailConfiguration;
//        private readonly IUserService userService;
//        private readonly ITransactionRepository transactionRepository;

//        public EmailService(IEmailConfiguration emailConfiguration, ITransactionRepository _transactionRepository, IUserService _userService)
//        {
//            _emailConfiguration = emailConfiguration;
//            transactionRepository = _transactionRepository;
//            userService = _userService;
//        }

//        public async Task<bool> CheckVerificationStatus(string transactionId)
//        {
//            var transaction = await transactionRepository.FindByTransactionIdAsync(transactionId);
//            if (transaction != null && transaction.Status == TransactionStatus.Done)
//            {
//                return (true);
//            }

//            return (false);
//        }

//        public List<EmailMessage> ReceiveEmail(int maxCount = 10)
//        {
//            throw new NotImplementedException();
//        }

//        public void Send(EmailMessage emailMessage)
//        {
//            var message = new MimeMessage();
//            message.To.AddRange(emailMessage.ToAddresses.Select(x => new MailboxAddress(x.Name, x.Address)));
//            message.From.AddRange(emailMessage.FromAddresses.Select(x => new MailboxAddress(x.Name, x.Address)));

//            message.Subject = emailMessage.Subject;
//            //We will say we are sending HTML. But there are options for plaintext etc. 
//            message.Body = new TextPart(TextFormat.Html)
//            {
//                Text = emailMessage.Content
//            };

//            //Be careful that the SmtpClient class is the one from Mailkit not the framework!
//            using (var emailClient = new SmtpClient())
//            {
//                emailClient.CheckCertificateRevocation = false;
//                emailClient.SslProtocols = SslProtocols.Ssl3 | SslProtocols.Ssl2 | SslProtocols.Tls | SslProtocols.Tls11 | SslProtocols.Tls12;

//                //The last parameter here is to use SSL (Which you should!)
//                emailClient.Connect(_emailConfiguration.SmtpServer, _emailConfiguration.SmtpPort, SecureSocketOptions.StartTls);

//                //Remove any OAuth functionality as we won't be using it. 
//                emailClient.AuthenticationMechanisms.Remove("XOAUTH2");

//                emailClient.Authenticate(_emailConfiguration.SmtpUsername, _emailConfiguration.SmtpPassword);

//                emailClient.Send(message);

//                emailClient.Disconnect(true);
//            }
//        }

//        public async Task<string> SendVerify(SkUser user, string email)
//        {
//            string guidId = Guid.NewGuid().ToString();

//            var emailMessage = new EmailMessage
//            {
//                Subject = "SoEasy Business Verification Email",
//                Content = GetVerifyHtmlString(user.FullName, guidId, user.Id.ToString(), email),
//                FromAddresses = new List<EmailAddress>() { new EmailAddress() { Name = "SoEasy Business Team", Address = "" } },
//                ToAddresses = new List<EmailAddress>() { new EmailAddress() { Name = user.FullName, Address = email } },
//            };

//            Send(emailMessage);

//            await transactionRepository.CreateAsync(new TransactionsLogs
//            {
//                Id = 0,
//                DateCreated = DateTime.Now,
//                UserId = user.Id,
//                Status = TransactionStatus.Pending,
//                Type = TransactionTypes.EmailVerification,
//                TransactionId = guidId,
//                Info = "SoEasy Business Verification Email"
//            });

//            return guidId;
//        }

//        public async Task<bool> VerifiedEmail(string transactionId, string email, int uid)
//        {
//            var transaction = await transactionRepository.FindByTransactionIdAsync(transactionId);
//            var user = await userService.GetByIdAsync(transaction.UserId);

//            if (transaction != null || uid != transaction.UserId || user != null)
//            {
//                transaction.Status = TransactionStatus.Done;
//                transaction.ExecuteDate = DateTime.Now;
//                await transactionRepository.UpdateAsync(transaction.Id, transaction);


//                if (email.Equals(user.Email))
//                {
//                    user.EmailVerified = true;
//                }
//                else if (email.Equals(user.PaypalEmail))
//                {
//                    user.PaypalEmailVerified = true;
//                }

//                await userService.UpdateAsync(user.Id, user);

//                return (true);
//            }

//            return (false);
//        }

//        private string GetVerifyHtmlString(string name, string transactionId, string uid, string email = "email")
//        {
//            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Resources\verificationTemplate.html");

//            if (File.Exists(path))
//            {
//                string htmlText = File.ReadAllText(path);

//                htmlText = htmlText.Replace("{{Endpoint}}", "http://localhost:4200/external/verification-email");
//                htmlText = htmlText.Replace("{{FullName}}", name);
//                htmlText = htmlText.Replace("{{email}}", email);
//                htmlText = htmlText.Replace("{{UserId}}", uid);
//                htmlText = htmlText.Replace("{{TransactionId}}", transactionId);

//                return htmlText;
//            }

//            return string.Empty;
//        }
//    }
//}
