using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Models;
using Teste.Business.ModelView;

namespace Teste.Business.Intefaces
{
     public interface IUsuario
    {
        Task<List<Usuario>> GetUsuario();
        Task<Usuario> AdicionarUsuario(Usuario usuario);
        Task<List<UsuarioView>> BuscaUsuario(int id);
        void UpdateUsuario(Usuario usuario);
        void Delete(Usuario usuario);

        Task<Usuario> BuscaUsuarioInId (int id); 
    }
}
