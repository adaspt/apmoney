using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace ApMoney.Infrastructure
{
    public class SpaRouteConstraint : IRouteConstraint
    {
        private readonly string clientRouteTokenName;

        public SpaRouteConstraint(string clientRouteTokenName)
        {
            this.clientRouteTokenName = clientRouteTokenName;
        }

        public bool Match(
            HttpContext httpContext,
            IRouter route,
            string routeKey,
            RouteValueDictionary values,
            RouteDirection routeDirection)
        {
            return !HasDotInLastSegment(values[clientRouteTokenName] as string ?? string.Empty);
        }

        private bool HasDotInLastSegment(string uri)
        {
            var lastSegmentStartPos = uri.LastIndexOf('/');
            return uri.IndexOf('.', lastSegmentStartPos + 1) >= 0;
        }
    }
}