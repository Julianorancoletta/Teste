using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Business.ModelView;
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

        public async Task<List<Usuario>> GetUsuario()
        {
            var list =
                 (from usuario in _context.Set<Usuario>()
                  join escolaridade in _context.Set<Escolaridade>()
                  on usuario.escolaridadeId equals escolaridade.id
                  select new Usuario
                  {
                      id = usuario.id,
                      nome = usuario.nome,
                      sobrenome = usuario.sobrenome,
                      Email = usuario.Email,
                      DataNascimento = usuario.DataNascimento,
                      escolaridadeId = usuario.escolaridadeId,
                      escolaridade = usuario.escolaridade
                  }).ToListAsync();

            return await list;
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

        public async Task<List<UsuarioView>> BuscaUsuario(int id)
        {

            var list =
                 (from usuario in _context.Usuarios
                  where usuario.id == id
                  let convertedDate = usuario.DataNascimento.ToString("yyyy-MM-dd")
                  select new UsuarioView
                  {
                      id = usuario.id,
                      nome = usuario.nome,
                      sobrenome = usuario.sobrenome,
                      Email = usuario.Email,
                      DataNascimento = convertedDate,
                      escolaridadeId = usuario.escolaridadeId
                  }).ToListAsync();

            return await list;
        }

        public void UpdateUsuario(Usuario usuario)
        {
            _context.Entry(usuario).State = EntityState.Modified;
            _context.SaveChanges();


        }


        public async Task<Usuario> BuscaUsuarioInId(int id)
        {
            return await _context.Usuarios.FindAsync(id);
        }
    }
}
