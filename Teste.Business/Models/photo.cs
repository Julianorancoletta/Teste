using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Teste.Business.Models
{
    public class Photo
    {
        [Key]
        public int Id { get; set; }
        public string file { get; set; }
        public string fileName { get; set; }

    }
}
