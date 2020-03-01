using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace web_identity_provider
{
    public class TestUsers
    {
        public static readonly List<TestUser> Users = new List<TestUser>
        {
            new TestUser
            {
                SubjectId = "1",
                Username = "ykergal",
                Password = "12345",
                Claims =
                {
                    new Claim("given_name", "Yves"),
                    new Claim("family_name", "Kergal"),
                    new Claim("email", "yves.kergal@test.com"),
                    new Claim("email_verified", "true"),
                    new Claim("website", "https://www.yveskergal.com")
                }
            }
        };
    }
}