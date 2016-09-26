using System.Collections.Generic;
using MediatR;

namespace ApMoney.Application.Accounts
{
    public class GetListRequest : IAsyncRequest<IEnumerable<AccountModel>>
    {
    }
}