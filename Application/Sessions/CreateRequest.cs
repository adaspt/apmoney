using System.ComponentModel.DataAnnotations;
using MediatR;

namespace ApMoney.Application.Sessions
{
    public class CreateRequest : IAsyncRequest<CreateResponse>
    {
        [Display(Name = "Google Id token")]
        [Required]
        public string GoogleIdToken { get; set; }
    }
}
