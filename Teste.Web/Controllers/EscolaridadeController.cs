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
    public class EscolaridadeController : ControllerBase
    {

        private readonly IEscolaridade _IEscolaridade;

        public EscolaridadeController(IEscolaridade escolaridade)
        {
            _IEscolaridade = escolaridade;
        }

        [HttpGet]
        public async Task<IList<Escolaridade>> Get()
        {
                return await _IEscolaridade.GetEscolaridadeList();
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Escolaridade>> Post ([FromQuery] Escolaridade escolaridade)
        {
            
            if (ModelState.IsValid)
            {
               await _IEscolaridade.AddEscolaridade(escolaridade);
                
                return escolaridade;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
