
using Loja.Business.Intefaces;
using Loja.Business.Models.product;
using Microsoft.AspNetCore.Mvc;

namespace Loja.api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BrandController : Controller
  {
    private readonly IAsync<Brand> _Brand;

    public BrandController(IAsync<Brand> Brand)
    {
      _Brand = Brand;
    }
  }
}
