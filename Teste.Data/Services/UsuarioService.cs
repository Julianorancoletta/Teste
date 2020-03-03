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
    public class UsuarioService : IUsuario
    {
        private readonly BancoContext _context;

        public UsuarioService(BancoContext context)
        {
            _context = context;
        }

        public async Task<IList<Usuario>> GetUsuario()
        {
            return await _context.Usuarios.ToListAsync();
        }

    }
}
