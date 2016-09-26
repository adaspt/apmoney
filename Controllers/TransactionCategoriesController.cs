using System.Threading.Tasks;
using ApMoney.Application.TransactionCategories;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class TransactionCategoriesController : ApiController
    {
        public TransactionCategoriesController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            return await SendAsync(new GetListRequest());
        }
    }
}