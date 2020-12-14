using Loja.Application.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Application.Model.Usuarios
{
  public class UsuarioDTO :BaseEntity
  {
    public string Nome { get; set; }

    public string Email { get; set; }
  }
}
