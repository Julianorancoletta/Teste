using Loja.Domain.Intefaces.Usuarios;
using Loja.Domain.Model.Usuarios;
using Microsoft.eShopWeb.Infrastructure.Data;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Data.Context
{
  public class UsuarioRepositoty : EfRepository<Usuario>, IUsuario
  {
    public UsuarioRepositoty(BancoContext context) : base(context)
    {
    }

    public Usuario query (UsuarioLogin model)
    {
      return _context.Usuarios.Where(u => u.Email == model.Email && u.Senha == ComputeSha256Hash(model.Senha)).SingleOrDefault();
    }

    private static string ComputeSha256Hash(string rawData)
    {
      // Create a SHA256   
      using (SHA256 sha256Hash = SHA256.Create())
      {
        // ComputeHash - returns byte array  
        byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

        // Convert byte array to a string   
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < bytes.Length; i++)
        {
          builder.Append(bytes[i].ToString("x2"));
        }
        return builder.ToString();
      }
    }
    public async Task<Usuario> PostUsuario(Usuario usuario)
    {
      usuario.Senha = ComputeSha256Hash(usuario.Senha);

      await AddAsync(usuario);
      return usuario;
    }
    public bool UsuarioEmailExists(string email)
    {
      return _context.Usuarios.Any(u => u.Email == email);
    }
  }
}
