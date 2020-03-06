using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.ModelView;
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
        public async Task<List<Usuario>> Get()
        {
            return await _IUsuario.GetUsuario();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}", Name = "Get")]
        public Task<List<UsuarioView>> Get(int id)
        {
             return  _IUsuario.BuscaUsuario(id);
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

        
        [HttpPut("{id}")]
        public  ActionResult<Usuario> Put([FromQuery] Usuario usuario)
        {
            if (usuario == null)
            {
                return NotFound();
            }
            
             _IUsuario.UpdateUsuario(usuario);

            return  usuario;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Usuario>> Delete(int id)
        {
            var usuario =  await _IUsuario.BuscaUsuarioInId(id);
            if (usuario == null)
            {
                return NotFound();  
            }

            _IUsuario.Delete(usuario);
            

            return usuario;
        }

    }
}
