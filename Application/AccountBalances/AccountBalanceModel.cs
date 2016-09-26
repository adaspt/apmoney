namespace ApMoney.Application.AccountBalances
{
    public class AccountBalanceModel
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int AccountId { get; set; }
        public decimal Amount { get; set; }
    }
}