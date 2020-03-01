using IdentityServer4.Models;
using System.Collections.Generic;

namespace web_identity_provider
{
    public static class Config
    {
        public static IEnumerable<ApiResource> GetApis()
        {
            return new[]
            {
                new ApiResource
                {
                    Name = "order_api",
                    DisplayName = "Order Service API",
                    ApiSecrets = {new Secret("apisecret".Sha256())},
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "order_api.orders",
                            DisplayName = "Order Service API - Orders",
                            Description = "Read access to your LogCorner account."
                        }
                    }
                }
            };
        }

        public static IEnumerable<IdentityResource> GetIdentityScopes()
        {
            return new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email()
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new[]
            {
                new Client
                {
                    ClientId = "powerbi_client",
                    ClientName = "powerbi client (auth code)",
                    AllowedScopes = {"order_api.orders"},
                    AccessTokenType = AccessTokenType.Reference,
                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris = {"https://oauth.powerbi.com/views/oauthredirect.html"},
                    ClientSecrets = {new Secret("secret".Sha256())},
                    AllowOfflineAccess = true
                }
            };
        }
    }
}