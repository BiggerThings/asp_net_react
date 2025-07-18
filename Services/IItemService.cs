using MyApp.Models;

namespace MyApp.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetAllAsync();
        Task<Item?> GetByIdAsync(int id);
        Task<Item> CreateAsync(Item item);
        Task<Item?> UpdateAsync(int id, Item item);
        Task<Item?> DeleteItem(int id);
    }
}
