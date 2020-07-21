using Microsoft.AppCenter.Crashes.Ingestion.Models;
using System;
using System.Buffers.Text;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


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
        public decimal salePrice { get; set; }
        public string shortDescription { get; set; }
        public int categoryid { get; set; }
        public Category category { get;set; }
        public string img { get; set; }
    }
}
