namespace ApMoney.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public AccountType Type { get; set; }
        public bool IsClosed { get; set; }
    }
}