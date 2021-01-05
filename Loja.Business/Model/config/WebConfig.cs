using Loja.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Domain.Model.config
{
  public class WebConfig : BaseEntity
  {
    public string key { get; set; }
    public string value { get; set; }
  }
}
