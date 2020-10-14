using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Loja.Business.Intefaces;
using Loja.Business.Models;
using Loja.Business.Models.product;
using Loja.Business.viewModel;
using Loja.Data.Context;
using X.PagedList;

namespace Loja.Data.Services
{
  public class ProductRepositoty : IProduct
  {
    private readonly BancoContext _context;
    private readonly IAsync<Product> _Product;

    public ProductRepositoty(BancoContext context, IAsync<Product> Product)
    {
      _context = context;
      _Product = Product;
    }

    public ProductList GetProduct(Busca busca = null)
    {

      var list =
          (from product in _context.Set<Product>()
           join category in _context.Set<Category>()
           on product.category.Id equals category.Id
           join SubCategoria in _context.Set<SubCategoria>()
           on product.subCategoria.Id equals SubCategoria.Id
           join brand in _context.Set<Brand>()
           on product.brand.Id equals brand.Id
           select new productView
           {
             id = product.Id,
             name = product.name,
             brand = brand.name,
             price = product.price,
             sale = product.sale,
             salePrice = product.salePrice,
             categoryId = category.Id,
             shortDescription = product.shortDescription,
             category = category.description,
             subCategoriaId = SubCategoria.Id,
             subCategoria = SubCategoria.nome,
             brandId = brand.Id,
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
      _Product.DeleteAsync(product);
    }

    public async Task<productView> BuscaProduct(int Id)
    {

      var list =
           (from product in _context.Set<Product>()
            join category in _context.Set<Category>()
            on product.category.Id equals category.Id
            join SubCategoria in _context.Set<SubCategoria>()
            on product.subCategoria.Id equals SubCategoria.Id
            join brand in _context.Set<Brand>()
            on product.brand.Id equals brand.Id
            where product.Id == Id
            select new productView
            {
              id = product.Id,
              name = product.name,
              brand = brand.name,
              price = product.price,
              sale = product.sale,
              salePrice = product.salePrice,
              categoryId = category.Id,
              shortDescription = product.shortDescription,
              category = category.description,
              subCategoriaId = SubCategoria.Id,
              brandId = brand.Id,
              img = product.img
            });

      return await list.FirstAsync();

    }

    public void UpdateProduct(Product product)
    {
      _context.Entry(product).State = EntityState.Modified;
      _context.SaveChanges();

    }

    public async Task<Product> BuscaProductId(int Id)
    {
      return await _context.Product.FindAsync(Id);
    }
  }
}