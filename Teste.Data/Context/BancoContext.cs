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

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Escolaridade> Escolaridades { get; set; }
    }
}
