using System.ComponentModel.DataAnnotations;

namespace ApMoney.Models
{
    public class TransactionSubcategory
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }
        public virtual TransactionCategory Category { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
    }
}