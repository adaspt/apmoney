using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class PagesController : Controller
    {
        [AllowAnonymous]
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}