using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ApMoney.Application.Sessions;

namespace ApMoney.Controllers
{
    [Route("api/[controller]")]
    public class SessionsController : ApiController
    {
        public SessionsController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateRequest message)
        {
            return await SendAsync(message);
        }
    }
}