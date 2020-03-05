using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Teste.Business.Models;

namespace Teste.Business.ViewModels
{
    public class UsuarioView
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public string Email { get; set; }

        [DisplayFormat(DataFormatString = "yyyy-dd-mm")]
        public DateTime DataNascimento { get; set; }

        public int idEscolaridade { get; set; }
    }
}
