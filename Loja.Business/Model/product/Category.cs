using Loja.Application.Intefaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loja.Application.Models
{
  public class Category : BaseEntity, IAggregateRoot
  {
        [Column(TypeName = "varchar(30)")]
        public string description { get; set; }
        public string img { get; set; }
        public bool Action { get; set; } = false;
    }
}
