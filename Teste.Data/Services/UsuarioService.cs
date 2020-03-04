using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.ViewModels;
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

        public async Task<IEnumerable<UsuarioView>> GetUsuario()
        {
            return await _context.Usuarios.Include(x => x.Escolaridade)
                 .Select(e => new UsuarioView
                 {
                     id = e.id,
                     nome = e.nome,
                     sobrenome = e.sobrenome,
                     DataNascimento = e.DataNascimento,
                     Email = e.Email,
                     idEscolaridade = e.IdEscolaridade,
                     DescricaoEscolaridades = e.Escolaridade.descricao
                     
                 }).ToListAsync();
        }

        public async Task<Usuario> AdicionarUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return usuario;
        }


    }
}
