using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace ApMoney.Application.Sessions
{
    public class CreateHandler : IAsyncRequestHandler<CreateRequest, CreateResponse>
    {
        public async Task<CreateResponse> Handle(CreateRequest message)
        {
            string tokenContent;
            using (var http = new HttpClient())
            {
                var uri = new Uri($"https://www.googleapis.com/oauth2/v3/tokeninfo?access_token={message.GoogleIdToken}");
                var response = await http.GetAsync(uri);
                if (!response.IsSuccessStatusCode)
                {
                    throw new BadRequestException("Invalid token.");
                }

                tokenContent = await response.Content.ReadAsStringAsync();
            }

            var tokenInfo = JsonConvert.DeserializeObject<GoogleTokenInfo>(tokenContent);
            if (!string.Equals(tokenInfo.Audience, "937228718376-d847opttvjog2gq0ejdlbnsvnk90mhu7.apps.googleusercontent.com", StringComparison.OrdinalIgnoreCase))
            {
                throw new BadRequestException("Invalid audience.");
            }

            if (string.IsNullOrEmpty(tokenInfo.Email))
            {
                throw new BadRequestException("Invalid e-mail.");
            }

            return GenerateIdToken(tokenInfo.Email);
        }

        private CreateResponse GenerateIdToken(string username)
        {
            var now = DateTime.UtcNow;
            var claims = new []
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, new DateTimeOffset(now).ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
            };
 
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("1234567890123456789012345678901234567890"));
            var jwt = new JwtSecurityToken(
                issuer: "SampleIssuer",
                audience: "SampleAudience",
                claims: claims,
                notBefore: now,
                expires: now.AddHours(1),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
        
            return new CreateResponse
            {
                IdToken = encodedJwt
            };
        }
    }
}