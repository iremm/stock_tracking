using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class ProductModel
    {
        [Required(ErrorMessage = "Product name is required")]
        public string ProductName { get; set; }

        [Required(ErrorMessage = "Quantity is required")]
        public int Quantity { get; set; }
    }
}


// [StringLength(100, ErrorMessage = "Product name cannot exceed 100 characters")]
// [Range(1, 10000, ErrorMessage = "Quantity must be between 1 and 10,000")]
// [RegularExpression(@"^[A-Z0-9]+$", ErrorMessage = "Product SKU must be alphanumeric")]
// [EmailAddress(ErrorMessage = "Invalid email address")]
// [Compare("ConfirmPassword", ErrorMessage = "Passwords do not match")]
// [CreditCard(ErrorMessage = "Invalid credit card number")]
// [Phone(ErrorMessage = "Invalid phone number")]
// [Url(ErrorMessage = "Invalid URL")]
// [DataType(DataType.Date, ErrorMessage = "Invalid date format")]