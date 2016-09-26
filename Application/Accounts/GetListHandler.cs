using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ApMoney.Application.Accounts
{
    public class GetListHandler : IAsyncRequestHandler<GetListRequest, IEnumerable<AccountModel>>
    {
        private readonly AppDbContext db;
        
        public GetListHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<AccountModel>> Handle(GetListRequest message)
        {
            return await db.Accounts
                .OrderBy(x => x.Name)
                .Select(x => new AccountModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Type = x.Type,
                    IsClosed = x.IsClosed
                })
                .ToListAsync();
        }
    }
}