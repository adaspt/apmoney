using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ApMoney.Application.Sessions;
using Microsoft.AspNetCore.Authorization;

namespace ApMoney.Controllers
{
    [Route("api/[controller]")]
    public class SessionsController : ApiController
    {
        public SessionsController(IMediator mediator) : base(mediator)
        {
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateRequest message)
        {
            return await SendAsync(message);
        }
    }
}