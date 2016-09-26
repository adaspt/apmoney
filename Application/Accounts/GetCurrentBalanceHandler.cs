using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ApMoney.Application.Accounts
{
    public class GetCurrentBalanceHandler :
        IAsyncRequestHandler<GetCurrentBalanceRequest, IDictionary<int, decimal>>
    {
        private readonly AppDbContext db;

        public GetCurrentBalanceHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IDictionary<int, decimal>> Handle(GetCurrentBalanceRequest message)
        {
            var now = DateTime.UtcNow;
            var monthStart = new DateTime(now.Year, now.Month, 1, 0, 0, 0, DateTimeKind.Utc);
            var balances = await db.AccountBalances
                .Where(x => x.Year == now.Year)
                .Where(x => x.Month == now.Month)
                .Select(x => new { x.AccountId, x.Amount })
                .ToListAsync();
            var transactions = await db.Transactions
                .Where(x => x.Date >= monthStart)
                .GroupBy(x => x.AccountId)
                .Select(g => new { AccountId = g.Key, Amount = g.Sum(x => x.Amount) })
                .ToListAsync();

            return balances.Union(transactions)
                .GroupBy(x => x.AccountId)
                .ToDictionary(x => x.Key, g => g.Sum(x => x.Amount));
        }
    }
}