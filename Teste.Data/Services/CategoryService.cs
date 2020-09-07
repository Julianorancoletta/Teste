using Loja.Business.Intefaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Loja.Business.Models;


namespace Loja.Data.Services
{
    public class CategoryService: ICategory
    {

        private readonly IAsync<Category> _CategoryRepository;

        public CategoryService (IAsync<Category> CategoryRepository)
        {
            _CategoryRepository = CategoryRepository;
        }

        public async Task<IList<Category>> GetCategoryList()
        {
            return await _CategoryRepository.ListAllAsync();
        }

        public async Task AddCategory (Category escolarIdade)
        {
            await _CategoryRepository.AddAsync(escolarIdade);
        }
    }
}
