using Microsoft.AppCenter.Crashes.Ingestion.Models;
using System;
using System.Buffers.Text;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Permissions;
using System.Text;
using Teste.Business.Models.product;

namespace Teste.Business.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string name { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal price { get; set; }
        public bool sale { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal salePrice { get; set; }
        [Column(TypeName = "varchar(100)")]
        public bool Action { get; set; } = false;
        public string img { get; set; }
        public string shortDescription { get; set; }
        public int categoryid { get; set; }
        public Category category { get;set; }
        public int subCategoriaid { get; set; }
        public SubCategoria subCategoria { get; set; }
        public int brandid { get; set; }
        public Brand brand { get; set; }
        public int detailsid { get; set; }
        public Details details { get; set; }

    }
}
