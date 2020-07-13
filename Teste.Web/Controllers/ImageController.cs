using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Teste.Web.Controllers
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

        [HttpGet]
        public string Get()
        {
            string texto = " Web API - ImagemController em execução : " + DateTime.Now.ToLongTimeString();
            texto += $"\n Ambiente :  {_environment.EnvironmentName}";
            return texto;
        }
        
        [HttpPost("upload")]
        public bool EnviaArquivo([FromBody] Photo photo)
        {
            if (string.IsNullOrEmpty(photo.file))
            {
                return false;
            }

            return true;
        }
    }
}

