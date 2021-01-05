using loja.api.Configurations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace loja.api
{
  public class Startup
  {
    public IConfiguration Configuration { get; }
    public Startup(IHostEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", true, true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true);


      builder.AddEnvironmentVariables();
      Configuration = builder.Build();
    }



    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // WebAPI Config
      services.AddControllers();
      // Setting DBContexts
      services.AddDatabaseConfiguration(Configuration);

      // Swagger Config
      services.AddSwaggerConfiguration();

      // .NET Native DI Abstraction
      services.AddDependencyInjectionConfiguration();


    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseCors(c =>
      {
        c.AllowAnyHeader();
        c.AllowAnyMethod();
        c.AllowAnyOrigin();
      });

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });

      app.UseSwaggerSetup();
    }
  }
}
