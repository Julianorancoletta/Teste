using Loja.Application.Model;
using Loja.Application.Model.Usuarios;
using Loja.Application.Models;
using Loja.Application.Models.product;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;

namespace Loja.Data.Context
{
  public class BancoContext : DbContext
  {
    public BancoContext(DbContextOptions<BancoContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Brand> brand { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<Details> detail { get; set; }
    public DbSet<Product> Product { get; set; }
    public DbSet<Specs> specs { get; set; }
    public DbSet<SubCategoria> SubCategoria { get; set; }
    public DbSet<Application.Models.product.Type> type { get; set; }
    public DbSet<gallery> galleries { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
  }
}
