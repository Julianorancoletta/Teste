using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Loja.Application.Intefaces;
using Loja.Application.Models;
using Loja.Application.viewModel;

namespace Loja.api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {

    private readonly IAsync<Category> _Category;
    public CategoryController(IAsync<Category> Category)
    {
      _Category = Category;
    }

    [HttpGet]
    public async Task<IReadOnlyList<Category>> Get([FromQuery] Busca busca)
    {
      var lista = _Category.ListAllAsync();

      return await lista;
    }

    [HttpPost]
    public async Task<ActionResult<Category>> Post([FromBody] Category Category)
    {
      if (ModelState.IsValid)
      {
        await _Category.AddAsync(Category);

        return Category;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }
  }
}
