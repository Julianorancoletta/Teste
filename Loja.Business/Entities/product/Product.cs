using System.ComponentModel.DataAnnotations.Schema;
using Loja.Business.Models.product;
using Loja.Business.Intefaces;

namespace Loja.Business.Models
{
  public class Product : BaseEntity, IAggregateRoot
  {
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
