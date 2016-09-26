using System;

namespace ApMoney.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        public TransactionType Type { get; set; }

        public int AccountId { get; set; }
        public virtual Account Account { get; set; }

        public DateTime Date { get; set; }

        public decimal Amount { get; set; }

        public int? CategoryId { get; set; }
        public virtual TransactionCategory Category { get; set; }

        public int? SubcategoryId { get; set; }
        public virtual TransactionSubcategory Subcategory { get; set; }

        public string Note { get; set; }
    }
}