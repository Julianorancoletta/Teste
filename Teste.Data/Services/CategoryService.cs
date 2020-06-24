using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Teste.Business.Intefaces;
using Teste.Business.Models;
using Teste.Data.Context;

namespace Teste.Data.Services
{
    public class CategoryService: ICategory
    {
        private readonly BancoContext _context;

        public CategoryService (BancoContext context)
        {
            _context = context;
        }

        public async Task<IList<Category>> GetCategoryList()
        {
            return await _context.Category.ToListAsync();
        }

        public async Task AddCategory(Category escolaridade)
        {
            _context.Category.Add(escolaridade);
            await _context.SaveChangesAsync();
        }
    }
}
