using Loja.Business.Models;
using Loja.Business.Intefaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Loja.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Loja.Data.Services
{
    public class Service<T> : IAsync<T> where T : BaseEntity
    {

        private readonly BancoContext _dbContext;

        public Service(BancoContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task<List<T>> ListAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }



    }
}
