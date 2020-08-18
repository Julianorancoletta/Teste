using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.Models.product;
using Teste.Business.viewModel;
using Teste.Data.Context;
using X.PagedList;

namespace Teste.Data.Services
{
    public class ProductService : IProduct
    {
        private readonly BancoContext _context;

        public ProductService(BancoContext context)
        {
            _context = context;
        }

        public ProductList GetProduct(Busca busca = null)
        {

            var list =
                (from product in _context.Set<Product>()
                 join category in _context.Set<Category>()
                 on product.category.id equals category.id
                 join SubCategoria in _context.Set<SubCategoria>()
                 on product.subCategoria.id equals SubCategoria.id
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
                     subCategoriaId = SubCategoria.id,
                     subCategoria = SubCategoria.nome,
                     img = product.img
                 });

            if (!string.IsNullOrEmpty(busca.ItemBuscado)) list = list.Where(x => x.title.StartsWith(busca.ItemBuscado));
            if (!string.IsNullOrEmpty(busca.categoria)) list = list.Where(x => x.category == busca.categoria);
            if (!string.IsNullOrEmpty(busca.subCategoria)) list = list.Where(x => x.subCategoria == busca.subCategoria);
            list = busca.order > 0 ? list.OrderByDescending(x => x.price) : list.OrderBy(x => x.price);

            decimal numpagina = (list.Count() / busca.itensPorPagina);

            ProductList productList = new ProductList
            {
                product = list.ToPagedList(busca.numeroPagina, busca.itensPorPagina),
                numPagina = numpagina > 0 ? (int)Math.Ceiling(numpagina) : 1
            };

            return productList;
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
                  on product.category.id equals category.id
                  join SubCategoria in _context.Set<SubCategoria>()
                  on product.subCategoria.id equals SubCategoria.id
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
                      subCategoriaId = SubCategoria.id,
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
