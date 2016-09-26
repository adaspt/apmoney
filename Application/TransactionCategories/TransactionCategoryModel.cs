using ApMoney.Models;

namespace ApMoney.Application.TransactionCategories
{
    public class TransactionCategoryModel
    {
        public int Id { get; set; }
        public TransactionType Type { get; set; }
        public string Name { get; set; }
    }
}
