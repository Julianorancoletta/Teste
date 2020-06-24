using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Models;


namespace Teste.Business.Intefaces
{
     public interface IProduct
    {
        Task<List<Product>> GetProduct();
        Task<Product> AdicionarUsuario(Product product);
        //Task<List<UsuarioView>> BuscaUsuario(int id);
        void UpdateProduct(Product product);
        void Delete(Product product);
        Task<Product> BuscaProductId(int id); 
    }
}
