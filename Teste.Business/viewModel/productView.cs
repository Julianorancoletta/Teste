using System;
using System.Collections.Generic;
using System.Text;

namespace Teste.Business.viewModel
{
    public class productView
    {
        public int id { get; set; }
        public string title { get; set; }
        public string brand { get; set; }
        public decimal price { get; set; }
        public bool sale { get; set; }
        public decimal sale_price { get; set; }
        public int categoryId { get; set; }
        public string shortDescription { get; set; }
        public string category { get; set; }
        public string img { get; set; }
    }
}
