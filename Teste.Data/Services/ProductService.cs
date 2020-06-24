using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.ModelView;
using Teste.Data.Context;

namespace Teste.Data.Services
{
    public class ProductService : IProduct
    {
        private readonly BancoContext _context;

        public ProductService(BancoContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetUsuario()
        {
            var list =
                 (from product in _context.Set<Product>()
                  join category in _context.Set<Category>()
                  on product.category_Id equals category.id
                  select new Product
                  {
                      id = usuario.id,
                      nome = usuario.nome,
                      sobrenome = usuario.sobrenome,
                      Email = usuario.Email,
                      DataNascimento = usuario.DataNascimento,
                      escolaridadeId = usuario.escolaridadeId,
                      escolaridade = usuario.escolaridade
                  }).ToListAsync();

            return await list;
        }

        public async Task<Product> AdicionarProduct(Product product)
        {
            _context.Product.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public void Delete(Product product)
        {
            _context.Product.Remove(product);
            _context.SaveChangesAsync();
        }

        //public async Task<List<UsuarioView>> BuscaUsuario(int id)
        //{

        //    var list =
        //         (from usuario in _context.Usuarios
        //          where usuario.id == id
        //          let convertedDate = usuario.DataNascimento.ToString("yyyy-MM-dd")
        //          select new UsuarioView
        //          {
        //              id = usuario.id,
        //              nome = usuario.nome,
        //              sobrenome = usuario.sobrenome,
        //              Email = usuario.Email,
        //              DataNascimento = convertedDate,
        //              escolaridadeId = usuario.escolaridadeId
        //          }).ToListAsync();

        //    return await list;
        //}

        public void UpdateProduct(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();

        }


        public async Task<Product> BuscaProductId(int id)
        {
            return await _context.Product.FindAsync(id);
        }
    }
}
