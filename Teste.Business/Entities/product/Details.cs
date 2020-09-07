﻿using Loja.Business.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Loja.Business.Models.product
{
    public class Details : BaseEntity
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