using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Teste.Business.Validation;

namespace Teste.Business.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string brand { get; set; }
        public decimal price { get; set; }
        public bool sale { get; set; }
        public decimal sale_price { get; set; }
        public int category_Id { get; set; }
        public Category category { get;set; }
    }
}
