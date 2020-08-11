using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Teste.Business.Models;
using Teste.Business.Models.product;

namespace Teste.Data.Context
{
    public class BancoContext :DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options) { }

        public DbSet<Product> Product { get; set; }

        public DbSet<Category> Category { get; set; }

        public DbSet<SubCategoria> SubCategoria { get; set; }

        //public DbSet<Photo> Photo { get; set; }
    }
}
