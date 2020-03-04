using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.ViewModels;
using Teste.Data.Context;

namespace Teste.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuario _IUsuario;

        public UsuarioController(IUsuario usuario)
        {
            _IUsuario = usuario;
        }

        // GET: api/Usuario
        [HttpGet]
        public async Task<IEnumerable<UsuarioView>> Get()
        {
            return await _IUsuario.GetUsuario();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuario
        [HttpPost]
        public async Task<ActionResult<Usuario>> Post([FromQuery] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                return await _IUsuario.AdicionarUsuario(usuario);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
