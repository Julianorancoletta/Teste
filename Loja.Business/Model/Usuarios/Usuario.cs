using Loja.Application.Intefaces;
using Loja.Application.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Loja.Application.Model.Usuarios
{
  public class Usuario : BaseEntity, IAggregateRoot
  {

    [Required(ErrorMessage = "O campo Nome é obrigatório")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "O campo Email é obrigatório")]
    public string Email { get; set; }

    [Required(ErrorMessage = "O campo Senha é obrigatório")]
    [DataType(DataType.Password)]
    [MinLength(6, ErrorMessage = "Este campo deve conter no mínimo 6 caracteres")]
    public string Senha { get; set; }
  }
}
