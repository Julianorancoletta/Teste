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
    private readonly IAsync<SubCategoria> _SubCategoria;

    public SubCategoriaController(IAsync<SubCategoria> SubCategoria)
        {
            _SubCategoria = SubCategoria;
        }

        // GET: api/SubCategoria/5
        [HttpGet("{id}")]
        public async Task<IReadOnlyList<SubCategoria>> Get(int id)
        {
            return await _SubCategoria.ListAllAsync();
        }
    

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<SubCategoria>> Post([FromQuery] SubCategoria SubCategoria)
        {

            if (ModelState.IsValid)
            {
                await _SubCategoria.AddAsync(SubCategoria);

                return SubCategoria;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

    }
}
