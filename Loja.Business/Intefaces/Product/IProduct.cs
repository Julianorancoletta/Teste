using Loja.Application.Models;
using Loja.Application.viewModel;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace Loja.Application.Intefaces
{
  public interface IProduct 
    {
    ProductList GetProduct(Busca busca = null);
    Task<Product> addProduct(Product product);
    Task<productView> BuscaProduct(int id);
    Task UpdateProduct(Product product);
    void Delete(Product product);
    Task<Product> BuscaProductId(int id);
    Task<List<string>> busca(Busca busca);
  }
}
