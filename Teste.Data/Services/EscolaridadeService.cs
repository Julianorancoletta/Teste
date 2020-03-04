using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Data.Context;

namespace Teste.Data.Services
{
    public class EscolaridadeService: IEscolaridade
    {
        private readonly BancoContext _context;

        public EscolaridadeService (BancoContext context)
        {
            _context = context;
        }

        public async Task<IList<Escolaridade>> GetEscolaridadeList()
        {
            return await _context.Escolaridades.ToListAsync();
        }

        public async Task AddEscolaridade(Escolaridade escolaridade)
        {
            _context.Escolaridades.Add(escolaridade);
            await _context.SaveChangesAsync();

        }
    }
}
