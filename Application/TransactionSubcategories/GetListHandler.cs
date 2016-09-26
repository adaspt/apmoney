using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApMoney.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ApMoney.Application.TransactionSubcategories
{
    public class GetListHandler
        : IAsyncRequestHandler<GetListRequest, IEnumerable<TransactionSubcategoryModel>>
    {
        private readonly AppDbContext db;

        public GetListHandler(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<TransactionSubcategoryModel>> Handle(GetListRequest message)
        {
            return await db.TransactionSubcategories
                .OrderBy(x => x.Name)
                .Select(x => new TransactionSubcategoryModel
                {
                    Id = x.Id,
                    CategoryId = x.CategoryId,
                    Name = x.Name
                })
                .ToListAsync();
        }
    }
}