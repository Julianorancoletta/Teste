using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Loja.Business.Models.product;

namespace Loja.Business.Intefaces
{
    public interface ISubCategoria
    {
        Task<IList<SubCategoria>> GetSubCategoriaList(int categoriaid);
        Task AddSubCategoria(SubCategoria subCategoria);
    }
}
