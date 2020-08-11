using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.Models.product;
using Teste.Data.Context;

namespace Teste.Data.Services
{
    public class SubCategoriaService : ISubCategoria
    { 
        private readonly BancoContext _context;

        public SubCategoriaService(BancoContext context)
        {
            _context = context;
        }

        public async Task<IList<SubCategoria>> GetSubCategoriaList(int categoriaid)
        {
            return await _context.SubCategoria.Where(x => x.category.id == categoriaid).ToListAsync();
        }

        public async Task AddSubCategoria(SubCategoria subCategoria)
        {
            _context.SubCategoria.Add(subCategoria);
            await _context.SaveChangesAsync();
        }
    }
}

