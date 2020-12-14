using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Loja.Application.Intefaces;
using Loja.Application.Models;
using Loja.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microsoft.eShopWeb.Infrastructure.Data
{
  public class EfRepository<T> : IAsync<T> where T : BaseEntity, IAggregateRoot
  {
    protected readonly BancoContext _context;

    public EfRepository(BancoContext dbContext)
    {
      _context = dbContext;
    }

    public virtual async Task<T> GetByIdAsync(int id)
    {
      return await _context.Set<T>().FindAsync(id);
    }

    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
      return await _context.Set<T>().ToListAsync();
    }

    public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
    {
      var specificationResult = ApplySpecification(spec);
      return await specificationResult.ToListAsync();
    }

    public async Task<IReadOnlyList<T>> ListAsyncID(int id )
    {
      return await _context.Set<T>().Where(x => x.Id == id).ToListAsync();
    }

    public async Task<int> CountAsync(ISpecification<T> spec)
    {
      var specificationResult = ApplySpecification(spec);
      return await specificationResult.CountAsync();
    }

    public async Task<T> AddAsync(T entity)
    {
      await _context.Set<T>().AddAsync(entity);
      await _context.SaveChangesAsync();

      return entity;
    }

    public async Task UpdateAsync(T entity)
    {
      _context.Entry(entity).State = EntityState.Modified;
      await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(T entity)
    {
      _context.Set<T>().Remove(entity);
      await _context.SaveChangesAsync();
    }

    public async Task<T> FirstAsync(ISpecification<T> spec)
    {
      var specificationResult = ApplySpecification(spec);
      return await specificationResult.FirstAsync();
    }

    public async Task<T> FirstOrDefaultAsync(ISpecification<T> spec)
    {
      var specificationResult = ApplySpecification(spec);
      return await specificationResult.FirstOrDefaultAsync();
    }

    private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    {
      var evaluator = new SpecificationEvaluator<T>();
      return evaluator.GetQuery(_context.Set<T>().AsQueryable(), spec);
    }
  }
}
