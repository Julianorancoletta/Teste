using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Teste.Business.Validation
{
    public class DateAttribute : RangeAttribute
    {
        public DateAttribute()
          : base(typeof(DateTime),DateTime.MinValue.ToShortDateString(), DateTime.Now.ToShortDateString()) { }
    }
}
