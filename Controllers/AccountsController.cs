using System.Threading.Tasks;
using ApMoney.Application.Accounts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class AccountsController : ApiController
    {
        public AccountsController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            return await SendAsync(new GetListRequest());
        }

        [HttpGet("currentbalance")]
        public async Task<IActionResult> GetCurrentBalance()
        {
            return await SendAsync(new GetCurrentBalanceRequest());
        }
    }
}