using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.viewModel;
using Teste.Data.Context;

namespace Teste.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _IProduct;

        public ProductController(IProduct product)
        {
            _IProduct = product;
        }

        // GET: api/Product
        [HttpGet]
        public async Task<List<productView>> Get()
        {
            return await _IProduct.GetProduct();
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public Task<productView> Get(int id)
        {
            return _IProduct.BuscaProduct(id);
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
    }
}
