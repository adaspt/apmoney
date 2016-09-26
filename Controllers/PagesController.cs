using Microsoft.AspNetCore.Mvc;

namespace ApMoney.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}