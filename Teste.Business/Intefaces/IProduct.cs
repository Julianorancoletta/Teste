using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Models;
using Teste.Business.viewModel;
using X.PagedList;

namespace Teste.Business.Intefaces
{
     public interface IProduct
    {
        ProductList GetProduct(Busca busca = null);
        Task<Product> addProduct(Product product);
        Task<productView> BuscaProduct(int id);
        void UpdateProduct(Product product);
        void Delete(Product product);
        Task<Product> BuscaProductId(int id);
        Task<List<string>> busca(Busca busca);
    }
}
