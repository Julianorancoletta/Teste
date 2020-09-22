using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Business.Models
{
    public abstract class BaseEntity
    {
        public virtual int Id { get; protected set; }
    }
}
