using System.Threading.Tasks;
using ApMoney.Application.Transactions;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class TransactionsController : ApiController
    {
        public TransactionsController(IMediator mediator) : base(mediator)
        {
        }

        public async Task<IActionResult> Post([FromBody] PostRequest message)
        {
            return await SendAsync(message);
        }
    }
}