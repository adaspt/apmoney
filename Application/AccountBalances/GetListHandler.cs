using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ApMoney.Application.AccountBalances
{
    public class GetListHandler : IAsyncRequestHandler<GetListRequest, IEnumerable<AccountBalanceModel>>
    {
        private readonly AppDbContext db;
        
        public GetListHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<AccountBalanceModel>> Handle(GetListRequest message)
        {
            return await db.AccountBalances
                .Where(x => x.Year == message.Year)
                .Where(x => x.Month == message.Month)
                .Select(x => new AccountBalanceModel
                {
                    Id = x.Id,
                    Year = x.Year,
                    Month = x.Month,
                    AccountId = x.AccountId,
                    Amount = x.Amount 
                })
                .ToListAsync();
        }
    }
}