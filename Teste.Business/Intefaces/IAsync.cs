using Loja.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Business.Intefaces
{
    public interface IAsync<T> where T : BaseEntity
    {
        Task<T> AddAsync(T entity);
        Task<List<T>> ListAllAsync();
    }
}
