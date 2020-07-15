using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Teste.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagemController : ControllerBase
    {

        private readonly IProduct _IProduct;
        public static IWebHostEnvironment _environment;
        public ImagemController(IWebHostEnvironment environment, IProduct product)
        {
            _environment = environment;
            _IProduct = product;
        }

        [HttpGet]
        public string Get()
        {
            string texto = " Web API - ImagemController em execução : " + DateTime.Now.ToLongTimeString();
            texto += $"\n Ambiente :  {_environment.EnvironmentName}";
            return texto;
        }
        
        [HttpPost("upload")]
        public async Task<string> EnviaArquivo([FromForm] Photo photo)
        {
            if (photo.file.Length > 0)
            {
                Product Product = await _IProduct.BuscaProductId(photo.ProductId);
                try
                {
                    if (!Directory.Exists(_environment.WebRootPath + "\\imagens\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\imagens\\");
                    }
                    using (FileStream filestream = System.IO.File.Create(_environment.WebRootPath + "\\imagens\\" + photo.file.FileName))
                    {
                        await photo.file.CopyToAsync(filestream);
                        filestream.Flush();

                        Product.img = "/imagens/" + photo.file.FileName;
                        _IProduct.UpdateProduct(Product);
                        return "\\imagens\\" + photo.file.FileName;


                    }
                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }
            }
            else
            {
                return "Ocorreu uma falha no envio do arquivo...";
            }
        }
    }
}

