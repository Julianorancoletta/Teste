using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Loja.Business.Intefaces;
using Loja.Business.Models;
using Loja.Business.viewModel;
using Loja.Data.Context;
using X.PagedList;

namespace Loja.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _IProduct;
        private static IWebHostEnvironment _environment;

        public ProductController(IProduct product, IWebHostEnvironment environment)
        {
            _environment = environment;
            _IProduct = product;
        }

        
        // GET: api/Product
        [HttpGet]
        public ActionResult<ProductList> Get([FromQuery] Busca busca)
        {
            var produto = _IProduct.GetProduct(busca);
            if (produto == null)
            {
                return NotFound();
            }
            return produto;
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<productView>> Get(int id)
        {
            var produto = _IProduct.BuscaProduct(id);
            if(produto == null)
            {
                return NotFound();
            }

            return await produto;
        }

        // POST: api/Product
        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromBody] Product Product)
        {


            if (ModelState.IsValid)
            {
                return await _IProduct.addProduct(Product);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [HttpPut("{id}")]
        public ActionResult<Product> Put([FromBody] Product Product)
        {
            if (Product == null)
            {
                return NotFound();
            }

            _IProduct.UpdateProduct(Product);

            return Product;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete(int id)
        {
            var Product = await _IProduct.BuscaProductId(id);
            if (Product == null)
            {
                return NotFound();
            }

            _IProduct.Delete(Product);


            return Product;
        }
        [HttpPost("upload")]
        public async Task<string> EnviaArquivo([FromForm] PhotoView photo)
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

        [HttpGet("busca")]
        public Task<List<string>> busca([FromQuery] Busca busca)
        {
            return _IProduct.busca(busca);
        }

    }
}