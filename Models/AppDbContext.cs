using Microsoft.EntityFrameworkCore;

namespace ApMoney.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<AccountBalance> AccountBalances { get; set; }
        public DbSet<TransactionCategory> TransactionCategories { get; set; }
        public DbSet<TransactionSubcategory> TransactionSubcategories { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
