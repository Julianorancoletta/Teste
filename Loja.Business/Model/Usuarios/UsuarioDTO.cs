using Loja.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Domain.Model.Usuarios
{
  public class UsuarioDTO :BaseEntity
  {
    public string Nome { get; set; }

    public string Email { get; set; }
  }
}
