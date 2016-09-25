using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace ApMoney.Application
{
    public class RequestError
    {
        public string Message { get; set; }
        public IDictionary<string, string> Errors { get; set; }

        public static RequestError FromModelState(ModelStateDictionary modelState)
        {
            IDictionary<string, string> errors = null;
            if (modelState.ErrorCount > 0)
            {
                errors = new ErrorDictionary(modelState
                    .Where(x => x.Value.Errors.Count > 0)
                    .ToDictionary(x => x.Key, x => x.Value.Errors.FirstOrDefault()?.ErrorMessage ?? "Value is invalid."));
            }

            return new RequestError
            {
                Message = "There was a problem.",
                Errors = errors
            };
        }

        [JsonDictionary(NamingStrategyType = typeof(CamelCaseNamingStrategy), NamingStrategyParameters = new object[] { true, false })]        
        private class ErrorDictionary : Dictionary<string, string>
        {
            public ErrorDictionary(IDictionary<string, string> dictionary)
            {
                foreach (var entry in dictionary)
                {
                    Add(entry.Key, entry.Value);
                }
            }
        }
    }
}
