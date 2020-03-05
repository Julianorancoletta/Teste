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
            return await _context.Usuarios
                 .Select(e => new UsuarioView
                 {
                     id = e.id,
                     nome = e.nome,
                     sobrenome = e.sobrenome,
                     DataNascimento = e.DataNascimento,
                     Email = e.Email,
                     idEscolaridade = e.IdEscolaridade,

                 }).ToListAsync();
        }

        public async Task<Usuario> AdicionarUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return usuario;
        }

        public void Delete(Usuario usuario)
        {
            _context.Usuarios.Remove(usuario);
            _context.SaveChangesAsync();
        }

        public async Task<Usuario> BuscaUsuario(int id)
        {
            return await _context.Usuarios.FindAsync(id);
        }

        public void UpdateUsuario(Usuario usuario)
        {
            _context.Usuarios.Update(usuario);
            _context.SaveChanges();

            
        }

    }
}
