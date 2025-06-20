using MyApp.Models;

namespace MyApp.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetAllAsync();
    }
}
