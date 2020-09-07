using Loja.Business.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Loja.Business.Models.product
{
    public class SubCategoria : BaseEntity
    {

        [Column(TypeName = "varchar(30)")]
        public string nome { get; set; }
        public string img { get; set; }
        public bool Action { get; set; } = false;
        public int categoryid { get; set; }
        public Category category { get; set; }
    }
}
