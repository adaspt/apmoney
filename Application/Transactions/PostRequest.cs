using System;
using ApMoney.Models;
using MediatR;

namespace ApMoney.Application.Transactions
{
    public class PostRequest : IAsyncRequest<int>
    {
        public TransactionType Type { get; set; }
        public int AccountId { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public string Note { get; set; }
    }
}