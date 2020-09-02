using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Teste.Business.Models.product
{
    public class Type
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string name { get; set; }
        public bool Action { get; set; } = false;
    }
}
