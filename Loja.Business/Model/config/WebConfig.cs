using Loja.Application.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Application.Model.config
{
  public class WebConfig : BaseEntity
  {
    public string key { get; set; }
    public string value { get; set; }
  }
}
