using Ardalis.Specification;
using Loja.Application.Model.Usuarios;
using Loja.Application.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Application.Intefaces
{
  public interface IAsync<T> where T : BaseEntity, IAggregateRoot
  {
    Task<T> GetByIdAsync(int id);
    Task<IReadOnlyList<T>> ListAllAsync();
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(T entity);
    Task<int> CountAsync(ISpecification<T> spec);
    Task<T> FirstAsync(ISpecification<T> spec);
    Task<T> FirstOrDefaultAsync(ISpecification<T> spec);

    Task <IReadOnlyList<T>> ListAsyncID (int id);
  }
}
