using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MediatR;

namespace ApMoney.Application.AccountBalances
{
    public class GetListRequest : IAsyncRequest<IEnumerable<AccountBalanceModel>>
    {
        [Display(Name = "Year")]
        [Required]
        public int Year { get; set; }

        [Display(Name = "Month")]
        [Required]
        public int Month { get; set; }
    }
}