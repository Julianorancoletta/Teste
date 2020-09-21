using Loja.Business.Models;
using Loja.Business.Models.product;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Loja.Data.Context
{
  public class BancoContext : DbContext
  {
    public BancoContext(DbContextOptions<BancoContext> options) : base(options) { }

    public DbSet<Brand> brand { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<Details> detail { get; set; }
    public DbSet<Product> Product { get; set; }
    public DbSet<Specs> specs { get; set; }
    public DbSet<SubCategoria> SubCategoria { get; set; }
    public DbSet<Business.Models.product.Type> type { get; set; }
    public DbSet<gallery> galleries { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
  }
}
