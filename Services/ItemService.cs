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

        public async Task<Item> CreateAsync([FromBody] Item item);
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

    }
}