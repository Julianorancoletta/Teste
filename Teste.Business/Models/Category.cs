using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Teste.Business.Models.product;

namespace Teste.Business.Models
{
    public class Category
    {

        [Key]
        public int id { get; set; }
        public string description { get; set; }
        public ICollection<Product> products { get; set; }
        public ICollection<SubCategoria> subCategorias { get; set; }
    }
}
