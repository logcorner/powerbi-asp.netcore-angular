using IdentityServer4.Models;
using System.Collections.Generic;

namespace indentity_provider
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> Ids =>
            new IdentityResource[]
            {
               new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email()
            };

        public static IEnumerable<ApiResource> Apis =>
            new ApiResource[]
            {
                 new ApiResource
                {
                    Name = "order_api",
                    DisplayName = "Wired Brain Coffee API",
                    ApiSecrets = {new Secret("apisecret".Sha256())},
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "wiredbrain_api.rewards",
                            DisplayName = "Wired Brain Coffee  API - Rewards",
                            Description = "Read access to your Wired Brain Coffee rewards account."
                        }
                    }
                }
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
               new Client
                {
                    ClientId = "powerbi_client",
                    ClientName = "powerbi client (auth code)",
                    AllowedScopes = {"wiredbrain_api.rewards"},
                    AccessTokenType = AccessTokenType.Reference,
                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris = {"https://oauth.powerbi.com/views/oauthredirect.html"},
                    ClientSecrets = {new Secret("secret".Sha256())},
                    AllowOfflineAccess = true
                }
            };
    }
}