using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Models;
using Teste.Business.ViewModels;

namespace Teste.Business.Intefaces
{
     public interface IUsuario
    {
        Task<IEnumerable<UsuarioView>> GetUsuario();
        Task<Usuario> AdicionarUsuario(Usuario usuario);

        Task<Usuario> BuscaUsuario(int id);

        void UpdateUsuario(Usuario usuario);
        void Delete(Usuario usuario);
    }
}
