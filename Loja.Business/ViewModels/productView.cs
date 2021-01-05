using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using X.PagedList;

namespace Loja.Domain.viewModel
{
    public class productView
    {
        public int id { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public bool sale { get; set; }
        public decimal salePrice { get; set; }
        public int categoryId { get; set; }
        public int brandId { get; set; }
        public int subCategoriaId { get; set; }
        public string shortDescription { get; set; }
        public string category { get; set; }
        public string brand { get; set; }
        public string subCategoria { get; set; }
        public string img { get; set; }
    }

    public class ProductList
    {
        public IPagedList<productView> product { get; set; }
        public int numPagina { get; set; }
    }


}
