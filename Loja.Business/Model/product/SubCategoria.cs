using Loja.Application.Intefaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loja.Application.Models.product
{
  public class SubCategoria : BaseEntity, IAggregateRoot
  {

        [Column(TypeName = "varchar(30)")]
        public string nome { get; set; }
        public string img { get; set; }
        public bool Action { get; set; } = false;
        public int categoryid { get; set; }
        public Category category { get; set; }
    }
}
