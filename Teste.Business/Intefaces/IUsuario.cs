﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Models;

namespace Teste.Business.Intefaces
{
     public interface IUsuario
    {
        Task<IList<Usuario>> GetUsuario();

    }
}
