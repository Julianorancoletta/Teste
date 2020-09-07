using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Loja.Business.Intefaces;
using Loja.Business.Models;
using Loja.Business.Models.product;
using Loja.Data.Context;

namespace Loja.Data.Services
{
    public class SubCategoriaService : ISubCategoria
    { 
        private readonly BancoContext _context;

        public SubCategoriaService(BancoContext context)
        {
            _context = context;
        }

        public async Task<IList<SubCategoria>> GetSubCategoriaList(int categoriaId)
        {
            return await _context.SubCategoria.Where(x => x.category.Id == categoriaId).ToListAsync();
        }

        public async Task AddSubCategoria(SubCategoria subCategoria)
        {
            _context.SubCategoria.Add(subCategoria);
            await _context.SaveChangesAsync();
        }
    }
}

