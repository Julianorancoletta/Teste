using Loja.Business.Intefaces;
using Loja.Data.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.Web.Configuration
{
    public static class ConfigureWebServices
    {
        public static IServiceCollection AddWebServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<ICategory, CategoryService>();


            return services;
        }
    }
}
