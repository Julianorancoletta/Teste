using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.viewModel;
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

        public async Task<List<productView>> GetProduct(Busca busca = null)
        {

            var list =
                 (from product in _context.Set<Product>()
                  join category in _context.Set<Category>()
                  on product.categoryid equals category.id
                  select new productView
                  {
                      id = product.id,
                      title = product.title,
                      brand = product.brand,
                      price = product.price,
                      sale = product.sale,
                      salePrice = product.salePrice,
                      categoryId = category.id,
                      shortDescription = product.shortDescription,
                      category = category.description,
                      img = product.img
                  });

            if (!string.IsNullOrEmpty(busca.ItemBuscado)) list = list.Where(x => x.title.StartsWith(busca.ItemBuscado));
            if (!string.IsNullOrEmpty(busca.categoria)) list = list.Where(x => x.category == busca.categoria);
            list = busca.order > 0 ? list.OrderByDescending(x => x.price) : list.OrderBy(x => x.price);
            
            return await list.ToListAsync();
        }

        public async Task<Product> addProduct(Product product)
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

        public async Task<productView> BuscaProduct(int id)
        {

            var list =
                 (from product in _context.Set<Product>()
                  join category in _context.Set<Category>()
                  on product.categoryid equals category.id
                  where product.id == id
                  select new productView
                  {
                      id = product.id,
                      title = product.title,
                      brand = product.brand,
                      price = product.price,
                      sale = product.sale,
                      salePrice = product.salePrice,
                      categoryId = category.id,
                      shortDescription = product.shortDescription,
                      category = category.description,
                      img = product.img
                  });

            return await list.FirstAsync();

        }

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
