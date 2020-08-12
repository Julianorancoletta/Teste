using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace Teste.Business.viewModel
{
    public class Busca
    {
        public int order { get; set; }
        public string ItemBuscado { get; set; }
        public string range { get; set; }
        public string categoria { get; set; }
        public string subCategoria { get; set; }
        public DateTime date { get; set; }

    }
}
