using System;

namespace ApMoney.Application
{
    public class BadRequestException : Exception
    {
        public BadRequestException(string message)
            : base(message)
        {
        }

        public RequestError ToError()
        {
            return new RequestError
            {
                Message = Message
            };
        }
    }
}
