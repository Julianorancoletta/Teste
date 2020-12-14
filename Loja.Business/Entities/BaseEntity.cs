using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Application.Models
{
    public abstract class BaseEntity
    {
        public virtual int Id { get; set; }
    }
}
