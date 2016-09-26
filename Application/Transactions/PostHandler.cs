using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;

namespace ApMoney.Application.Transactions
{
    public class PostHandler : IAsyncRequestHandler<PostRequest, int>
    {
        private readonly AppDbContext db;
        public PostHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<int> Handle(PostRequest message)
        {
            var transaction = new Transaction
            {
                Type = message.Type,
                AccountId = message.AccountId,
                Date = message.Date,
                Amount = message.Amount,
                CategoryId = message.CategoryId,
                SubcategoryId = message.SubcategoryId,
                Note = message.Note
            };

            db.Transactions.Add(transaction);
            await db.SaveChangesAsync();

            return transaction.Id;
        }
    }
}