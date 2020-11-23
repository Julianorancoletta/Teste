using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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
    [NotMapped]
    public int _numeroPagina;
    
    public int numeroPagina
    {
      get
      {
        if (_numeroPagina <= 0) return 1;
        else return _numeroPagina;
      }
      set
      {
        _numeroPagina = value;
      }
    }
    public int _itensPorPagina;
    [NotMapped]
    public int itensPorPagina
    {
      get
      {
        if (_itensPorPagina <= 0) return 5;
        else return _itensPorPagina;
      }
      set
      {
        _itensPorPagina = value;
      }
    }
  }
}
