using MyApp.Models;
using MyApp.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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

    }
}