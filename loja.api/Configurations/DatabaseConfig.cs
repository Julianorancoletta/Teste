using System;
using Loja.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace loja.api.Configurations
{
  public static class DatabaseConfig
  {
    public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration configuration)
    {
      if (services == null) throw new ArgumentNullException(nameof(services));

      services.AddDbContext<BancoContext>(c =>
                c.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

    }
  }
}
