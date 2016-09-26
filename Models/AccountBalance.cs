namespace ApMoney.Models
{
    public class AccountBalance
    {
        public int Id { get; set; }

        public int Year { get; set; }

        public int Month { get; set; }
        
        public int AccountId { get; set; }
        public virtual Account Account { get; set; }

        public decimal Amount { get; set; }
    }
}