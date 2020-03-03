using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Teste.Business.Models
{
    public class Usuario
    {
        [Key]
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }

        public int IdEscolaridade { get; set; }
        public Escolaridade Escolaridade { get; set; }
    }
}
