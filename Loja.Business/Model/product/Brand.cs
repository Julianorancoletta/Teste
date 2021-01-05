using Loja.Domain.Intefaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loja.Domain.Models.product
{
  public class Brand : BaseEntity, IAggregateRoot
  {
        [Column(TypeName = "varchar(30)")]
        public string name   { get; set; }
        public bool Action { get; set; } = false;
    }
}
