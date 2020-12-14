using Loja.Application.Model.Usuarios;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.Application.Intefaces.Usuarios
{
  public interface IUsuario
  {
    Usuario query(UsuarioLogin model);

    bool UsuarioEmailExists(string email);
    Task<Usuario> PostUsuario(Usuario usuario);
  }
}
