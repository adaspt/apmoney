using ApMoney.Models;

namespace ApMoney.Application.Accounts
{
    public class AccountModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public AccountType Type { get; set; }
        public bool IsClosed { get; set; }

    }
}