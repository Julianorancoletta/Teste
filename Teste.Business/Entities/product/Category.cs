using Loja.Business.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Loja.Business.Models.product;

namespace Loja.Business.Models
{
    public class Category : BaseEntity
    {
        [Column(TypeName = "varchar(30)")]
        public string description { get; set; }
        public string img { get; set; }
        public bool Action { get; set; } = false;
    }
}
