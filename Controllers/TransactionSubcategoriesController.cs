using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ApMoney.Application.TransactionSubcategories;

namespace ApMoney.Controllers
{
    public class TransactionSubcategoriesController : ApiController
    {
        public TransactionSubcategoriesController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            return await SendAsync(new GetListRequest());
        }
    }
}