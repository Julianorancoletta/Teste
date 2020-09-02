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
                 join brand in _context.Set<Brand>()
                 on product.brand.id equals brand.id
                 select new productView
                 {
                     id = product.id,
                     name = product.name,
                     brand = brand.name,
                     price = product.price,
                     sale = product.sale,
                     salePrice = product.salePrice,
                     categoryId = category.id,
                     shortDescription = product.shortDescription,
                     category = category.description,
                     subCategoriaId = SubCategoria.id,
                     subCategoria = SubCategoria.nome,
                     brandId = brand.id,
                     img = product.img
                 });

            if (!string.IsNullOrEmpty(busca.ItemBuscado)) list = list.Where(x => x.name.StartsWith(busca.ItemBuscado));
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
        public async Task<List<string>> busca(Busca busca)
        {

            var list = _context.Product.Where(x => x.name.StartsWith(busca.ItemBuscado)).Select(x => x.name).ToListAsync();


            return await list;
        }

        public async Task<Product> addProduct(Product product)
        {
            _context.Product.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public void Delete(Product product)
        {
            _context.Remove(product);
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
                  join brand in _context.Set<Brand>()
                  on product.brand.id equals brand.id
                  where product.id == id
                  select new productView
                  {
                      id = product.id,
                      name = product.name,
                      brand = brand.name,
                      price = product.price,
                      sale = product.sale,
                      salePrice = product.salePrice,
                      categoryId = category.id,
                      shortDescription = product.shortDescription,
                      category = category.description,
                      subCategoriaId = SubCategoria.id,
                      brandId = brand.id,
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
