using System.Collections.Generic;
using MediatR;

namespace ApMoney.Application.Accounts
{
    public class GetCurrentBalanceRequest : IAsyncRequest<IDictionary<int, decimal>>
    {
    }
}