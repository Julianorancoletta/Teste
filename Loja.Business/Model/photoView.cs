using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Loja.Business.Models
{
    public class PhotoView
    {
        [Key]
        public int Id { get; set; }
        public IFormFile file { get; set; }
        public int ProductId { get; set; }

    }
}
