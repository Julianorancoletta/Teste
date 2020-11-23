using Loja.Business.Intefaces;
using Loja.Data.Services;
using Microsoft.eShopWeb.Infrastructure.Data;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace loja.Infra.CrossCutting.IoC
{
  public static class NativeInjectorBootStrapper
  {
    public static void RegisterServices(IServiceCollection services)
    {
      services.AddScoped(typeof(IAsync<>), typeof(EfRepository<>));
      services.AddScoped<IProduct, ProductRepositoty>();
    }
  }
}
