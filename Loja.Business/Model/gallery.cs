using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Loja.Application.Models.product;

namespace Loja.Application.Models
{
    public class gallery
    {
        [Key]
        public int id { get; set; }
        public string img { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string subtitle { get; set; }
    }
}
