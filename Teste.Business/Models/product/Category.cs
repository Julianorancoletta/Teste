using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Teste.Business.Models.product;

namespace Teste.Business.Models
{
    public class Category
    {

        [Key]
        public int id { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string description { get; set; }
        public string img { get; set; }
        public bool Action { get; set; } = false;
    }
}
