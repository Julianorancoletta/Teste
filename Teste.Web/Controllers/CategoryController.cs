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

        //public async Task<string> EnviaArquivo([FromForm] PhotoView photo)
        //{
        //    if (photo.file.Length > 0)
        //    {
        //        Product Product = await _IProduct.BuscaProductId(photo.ProductId);
        //        try
        //        {
        //            if (!Directory.Exists(_environment.WebRootPath + "\\imagens\\"))
        //            {
        //                Directory.CreateDirectory(_environment.WebRootPath + "\\imagens\\");
        //            }
        //            using (FileStream filestream = System.IO.File.Create(_environment.WebRootPath + "\\imagens\\" + photo.file.FileName))
        //            {
        //                await photo.file.CopyToAsync(filestream);
        //                filestream.Flush();

        //                Product.img = "/imagens/" + photo.file.FileName;
        //                _IProduct.UpdateProduct(Product);
        //                return "\\imagens\\" + photo.file.FileName;


        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            return ex.ToString();
        //        }
        //    }
        //    else
        //    {
        //        return "Ocorreu uma falha no envio do arquivo...";
        //    }
        //}
    }
}
