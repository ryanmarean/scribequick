using Microsoft.EntityFrameworkCore;

namespace ScribeQuick.Models
{
    public class ScribeQuickContext : DbContext
    {
        public ScribeQuickContext(DbContextOptions options) : base(options) {}

        public DbSet<User> Users { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Deity> Deities { get; set; }
        public DbSet<Power> Powers { get; set; }
        public DbSet<CharacterPower> CharacterPowers { get; set; }
    }
}