using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Teste.Business.Models
{
    public class Escolaridade
    {
        [Key]
        public int id { get; set; }

        public string descricao { get; set; }

        
    }
}
