using Engineering.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Engineering.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Request> Requests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Request>()
                .Property(r => r.Approved)
                .HasDefaultValue(false);

            modelBuilder.Entity<Request>()
                .Property(r => r.EngineerAssigned)
                .HasDefaultValue(null);

            modelBuilder.Entity<Request>()
                .Property(r => r.DateCompleted)
                .HasDefaultValue(null);
        }
    }
}