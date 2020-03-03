using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Business.Intefaces;
using Teste.Business.Models;

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

        // GET: api/Escolaridade
        [HttpGet]
        public async Task<IList<Escolaridade>> Get()
        {
                return await _IEscolaridade.GetEscolaridadeList();
        }

        //// GET: api/Escolaridade/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [HttpPost]
        public void Post([FromQuery] Escolaridade escolaridade)
        {
            _IEscolaridade.AddEscolaridade(escolaridade);
        }

        //// PUT: api/Escolaridade/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
