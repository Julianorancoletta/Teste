using Loja.Business.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Loja.Business.Models.product
{
    public class Specs : BaseEntity
    {   
        public int productid { get; set; }
        public Product product { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string warranty { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string color { get; set; }
        [Column(TypeName = "decimal(5,2)")]
        public decimal size { get; set; }
        [Column(TypeName = "varchar(max)")]
        public string specs { get; set; }
        public int galleryid { get; set; }
        public gallery gallery { get; set; }
        public int typeid { get; set; }
        public Type type { get; set; }

    }
}
