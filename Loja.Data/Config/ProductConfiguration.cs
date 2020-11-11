using Loja.Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Loja.Data.Config
{
  public class ProductConfiguration :IEntityTypeConfiguration<Product>
  {
    public void Configure(EntityTypeBuilder<Product> builder)
    {
      //builder.ToTable("Product");
      //builder.HasKey(x => x.Id);
      //builder.Property(x => x.name)
      //  .HasMaxLength(50)
      //  .IsRequired();
    }
  }
}
