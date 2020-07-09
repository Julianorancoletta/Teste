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
    public class CategoryController : ControllerBase
    {

        private readonly ICategory _ICategory;

        public CategoryController(ICategory Category)
        {
            _ICategory = Category;
        }

        [HttpGet]
        public async Task<IList<Category>> Get()
        {
                return await _ICategory.GetCategoryList();
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Category>> Post ([FromQuery] Category Category)
        {
            
            if (ModelState.IsValid)
            {
               await _ICategory.AddCategory(Category);
                
                return Category;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
