using Loja.Domain.Model.Usuarios;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.Domain.Intefaces.Usuarios
{
  public interface IUsuario
  {
    Usuario query(UsuarioLogin model);

    bool UsuarioEmailExists(string email);
    Task<Usuario> PostUsuario(Usuario usuario);
  }
}
