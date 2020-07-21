using System;
using System.Collections.Generic;
using System.Text;

namespace Teste.Business.Models
{
    public class gallery
    {
        public int id { get; set; }
        public int productid { get; set; }
        public Product product { get; set; }
        public string img { get; set; }
    }
}
