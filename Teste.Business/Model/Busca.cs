using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Business.viewModel
{
    public class Busca
    {
        public int order { get; set; }
        public string ItemBuscado { get; set; }
        public string range { get; set; }
        public string categoria { get; set; }
        public string subCategoria { get; set; }
        public DateTime date { get; set; }

        public int numeroPagina { get; set; }
        public int itensPorPagina { get; set; }

    }
}
