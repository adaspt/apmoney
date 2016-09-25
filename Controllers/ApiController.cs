using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ApMoney.Application;

namespace ApMoney.Controllers
{
    public abstract class ApiController : Controller
    {
        private readonly IMediator mediator;
        
        public ApiController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        public async Task<IActionResult> SendAsync<TResponse>(IAsyncRequest<TResponse> message)
        {
            if (message == null || !ModelState.IsValid)
            {
                return BadRequest(RequestError.FromModelState(ModelState));
            }

            try
            {
                return Ok(await mediator.SendAsync(message));
            }
            catch (BadRequestException ex)
            {
                return BadRequest(ex.ToError());
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
        }
    }
}