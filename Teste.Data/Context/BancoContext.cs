using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Teste.Business.Models;

namespace Teste.Data.Context
{
    public class BancoContext :DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options) { }

        public DbSet<Product> Product { get; set; }

        public DbSet<Category> Category { get; set; }
    }
}
