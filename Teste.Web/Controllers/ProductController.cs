using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;
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

        // GET: api/Usuario
        [HttpGet]
        public async Task<List<Product>> Get()
        {
            return await _IProduct.();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}", Name = "Get")]
        public Task<List<UsuarioView>> Get(int id)
        {
             return _IProduct.BuscaUsuario(id);
        }

        // POST: api/Usuario
        [HttpPost]
        public async Task<ActionResult<Usuario>> Post([FromQuery] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                    return await_IProduct.AdicionarUsuario(usuario);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        
        [HttpPut("{id}")]
        public  ActionResult<Usuario> Put([FromQuery] Usuario usuario)
        {
            if (usuario == null)
            {
                return NotFound();
            }
            
            _IProduct.UpdateUsuario(usuario);

            return  usuario;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Usuario>> Delete(int id)
        {
            var usuario =  await_IProduct.BuscaUsuarioInId(id);
            if (usuario == null)
            {
                return NotFound();  
            }

           _IProduct.Delete(usuario);
            

            return usuario;
        }

    }
}
