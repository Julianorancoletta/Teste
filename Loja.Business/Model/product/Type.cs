using Loja.Application.Intefaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loja.Application.Models.product
{
  public class Type : BaseEntity, IAggregateRoot
  {
        [Column(TypeName = "varchar(30)")]
        public string name { get; set; }
        public bool Action { get; set; } = false;
    }
}
