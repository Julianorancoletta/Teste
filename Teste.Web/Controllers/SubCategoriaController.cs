using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Loja.Business.Intefaces;
using Loja.Business.Models.product;

namespace Loja.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoriaController : ControllerBase
    {
        private readonly ISubCategoria _ISubCategoria;

        public SubCategoriaController(ISubCategoria SubCategoria)
        {
            _ISubCategoria = SubCategoria;
        }

        // GET: api/SubCategoria/5
        [HttpGet("{id}")]
        public async Task<IList<SubCategoria>> Get(int id)
        {
            return await _ISubCategoria.GetSubCategoriaList(id);
        }
    

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<SubCategoria>> Post([FromQuery] SubCategoria SubCategoria)
        {

            if (ModelState.IsValid)
            {
                await _ISubCategoria.AddSubCategoria(SubCategoria);

                return SubCategoria;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

    }
}
