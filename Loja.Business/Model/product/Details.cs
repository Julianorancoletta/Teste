using Loja.Application.Intefaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loja.Application.Models.product
{
  public class Details : BaseEntity, IAggregateRoot
  {
        public string Garantia { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesEmbalagemA { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesEmbalagemL { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesEmbalagemP { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesProdutoA { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesProdutoL { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal dimensoesProdutoP { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal embalagemPeso { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal ProdutoPeso { get; set; }
    }
}
