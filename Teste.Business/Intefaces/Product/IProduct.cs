using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Loja.Business.Models;
using Loja.Business.viewModel;
using X.PagedList;

namespace Loja.Business.Intefaces
{
     public interface IProduct
    {
        ProductList GetProduct(Busca busca = null);
        Task<Product> addProduct(Product product);
        Task<productView> BuscaProduct(int Id);
        void UpdateProduct(Product product);
        void Delete(Product product);
        Task<Product> BuscaProductId(int Id);
        Task<List<string>> busca(Busca busca);
    }
}
