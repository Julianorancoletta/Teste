using Loja.Domain.Intefaces;
using Loja.Domain.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace loja.api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TesteEmailController : Controller
  {
    private readonly IEmailSender _emailSender;
    public TesteEmailController(IEmailSender emailSender)
    {
      _emailSender = emailSender;
    }

    [HttpPost]
    public async Task<IActionResult> EnviaEmail(EmailModel email)
    {
      if (ModelState.IsValid)
      {
        try
        {
          await _emailSender.SendEmailAsync(email.Destino, email.Assunto, email.Mensagem);
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return Ok("EmailEnviado");
    }
  }
}
