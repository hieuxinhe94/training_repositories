using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SK.Entity.Common;
using SK.Service.Interfaces;
using SK.ViewModels;
using SK.ViewModels.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SignkeyBusinessPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {

        private readonly IUserService userService;
        public IConfiguration Configuration { get; }

        public AuthenticateController(IConfiguration _configuration, IUserService _userService)
        {

            userService = _userService;
            Configuration = _configuration;
        }

        [HttpPost("token")]
        public async Task<IActionResult> Token(AuthenticateRequest model)
        {
            var user = await userService.FindByEmailAndPassowrd(model.UserName, model.Password);

            // return null if user not found
            if (user == null) return Unauthorized();

            // authentication successful so generate jwt token
            var token = GenerateJwtToken(user);

            var res = new AuthenticateResponse(user, token);

            if (res == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(res);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Registration(RegistrationRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await userService.RegisterNew(model.FullName, model.Email, model.PhoneNumber, model.Password);

            return Ok(result);
        }

        private string GenerateJwtToken(SkUser user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Configuration["Authorization:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
