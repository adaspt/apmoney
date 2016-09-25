using Newtonsoft.Json;

namespace ApMoney.Application.Sessions
{
    public class GoogleTokenInfo
    {
        [JsonProperty("aud")]
        public string Audience { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }
    }
}