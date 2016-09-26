using System.Collections.Generic;
using MediatR;

namespace ApMoney.Application.TransactionSubcategories
{
    public class GetListRequest : IAsyncRequest<IEnumerable<TransactionSubcategoryModel>>
    {
    }
}