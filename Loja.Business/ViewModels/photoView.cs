using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Loja.Domain.Models
{
    public class PhotoView
    {
        public IFormFile file { get; set; }
        [Required]
        public string Pasta { get; set; }
    }
}
