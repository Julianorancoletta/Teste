using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Loja.Domain.Intefaces;
using Loja.Domain.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Loja.api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ImagemController : ControllerBase
  {
    public static IWebHostEnvironment _environment;
    public ImagemController(IWebHostEnvironment environment)
    {
      _environment = environment;

    }


    [HttpPost("upload")]
    public async Task<string> EnviaArquivo([FromForm] PhotoView photo)
    {

      if (photo.file == null || photo.file.Length == 0)
      {
        return "Forneça uma imagem para este produto!";
      }
      var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", photo.file.FileName);
      string imgbase64;

      if (System.IO.File.Exists(path))
      {
        return "Já existe um arquivo com este nome!";
      }

      using (var stream = new FileStream(path, FileMode.Create))
      {
        await photo.file.CopyToAsync(stream);
      }

      using (var ms = new MemoryStream())
      {
        photo.file.CopyTo(ms);
        var fileBytes = ms.ToArray();
        imgbase64 = "data:image/png;base64, " + Convert.ToBase64String(fileBytes);
      }

      return imgbase64;
    }
  }
}

