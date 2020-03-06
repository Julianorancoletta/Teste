using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Teste.Business.Validation;

namespace Teste.Business.ModelView
{
    public class UsuarioView
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = "Informe um email válido...")]
        public string Email { get; set; }
        [Date(ErrorMessage = "data de nascimento não pode ser maior que Atual")]
        public string DataNascimento { get; set; }

        public int escolaridadeId { get; set; }
    }
}
