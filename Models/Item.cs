using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}