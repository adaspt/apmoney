using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ApMoney.Application.TransactionCategories
{
    public class GetListHandler
        : IAsyncRequestHandler<GetListRequest, IEnumerable<TransactionCategoryModel>>
    {
        private readonly AppDbContext db;

        public GetListHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<TransactionCategoryModel>> Handle(GetListRequest message)
        {
            return await db.TransactionCategories
                .OrderBy(x => x.Name)
                .Select(x => new TransactionCategoryModel
                {
                    Id = x.Id,
                    Type = x.Type,
                    Name = x.Name
                })
                .ToListAsync();
        }
    }
}