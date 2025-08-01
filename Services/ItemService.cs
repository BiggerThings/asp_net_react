using MyApp.Models;
using MyApp.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Services
{
    public class ItemService : IItemService
    {
        private readonly AppDataContext _context;

        public ItemService(AppDataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Item>> GetAllAsync()
        {
            return await _context.Items.ToListAsync();
        }

        public async Task<Item?> GetByIdAsync(int id)
        {
            return await _context.Items.FindAsync(id);
        }

        public async Task<Item> CreateAsync(Item item)
        {
            await _context.Items.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Item?> UpdateAsync(int id, Item item)
        {
            var existingItem = await _context.Items.FindAsync(id);
            if (existingItem == null)
            {
                return null;
            }

            existingItem.Title = item.Title;
            await _context.SaveChangesAsync();
            return existingItem;
        }

        public async Task<Item?> DeleteItem(int id)
        {
            var itemToDelete = await _context.Items.FindAsync(id);
            if (itemToDelete == null)
            {
                return null;
            }

            _context.Items.Remove(itemToDelete);
            await _context.SaveChangesAsync();
            return itemToDelete;
        }
    }
}