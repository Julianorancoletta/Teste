using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Loja.Business.Intefaces;
using Loja.Business.Models;
using Loja.Business.viewModel;
using AutoMapper;

namespace Loja.Web.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {

    private readonly IAsync<Category> _Category;
    private readonly IMapper _mapper;
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
