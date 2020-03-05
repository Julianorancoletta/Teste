using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Teste.Business.Validation;

namespace Teste.Business.Models
{
    public class Usuario
    {
        [Key]
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = "Informe um email válido...")]
        public string Email { get; set; }
        [Date(ErrorMessage = "data de nascimento não pode ser maior que Atual")]
        public DateTime DataNascimento { get; set; }

        public int IdEscolaridade { get; set; }
    }
}
