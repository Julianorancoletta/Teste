using Loja.Domain.Model.Usuarios;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Loja.Data.Config
{
  public class ProductConfiguration :IEntityTypeConfiguration<Usuario>
  {
    public void Configure(EntityTypeBuilder<Usuario> builder)
    {
      builder.HasIndex(u => u.Email)
        .IsUnique();
    }
  }
}
