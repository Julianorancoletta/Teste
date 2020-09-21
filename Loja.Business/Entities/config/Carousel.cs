using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Business.Models
{
    public class Carousel
    {
        public int id { get; set; }
        public int speed { get; set; }
        public int amountOfImage { get; set; }
        public string title { get; set; }
    }
}
