using System.ComponentModel.DataAnnotations;

namespace SK.ViewModels.ViewModels
{
    public class UpdateProfileRequest
    {
        
        [Required]
        public string FullName { get; set; }

        [Required]
        public string PaypalEmail { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
    }
}
