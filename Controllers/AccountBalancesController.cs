using System.Threading.Tasks;
using ApMoney.Application.AccountBalances;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class AccountBalancesController : ApiController
    {
        public AccountBalancesController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetList(GetListRequest message)
        {
            return await SendAsync(message);
        }
    }
}