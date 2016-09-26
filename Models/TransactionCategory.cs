using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ApMoney.Models
{
    public class TransactionCategory
    {
        public int Id { get; set; }

        public TransactionType Type { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public virtual ICollection<TransactionSubcategory> Subcategories { get; set; }
             = new HashSet<TransactionSubcategory>();
    }

}