using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Loja.Application.Model.Usuarios
{
  public class UsuarioLogin
  {
    [Required]
    public string Email { get; set; }

    [Required]
    public string Senha { get; set; }
  }
}
