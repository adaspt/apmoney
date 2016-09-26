using System.Collections.Generic;
using MediatR;

namespace ApMoney.Application.TransactionCategories
{
    public class GetListRequest : IAsyncRequest<IEnumerable<TransactionCategoryModel>>
    {
    }
}