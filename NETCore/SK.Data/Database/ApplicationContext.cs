using Microsoft.EntityFrameworkCore;
using SK.Entity.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace SK.Data.Database
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<SettingKeyVal> SettingKeyVal { get; set; }
        public DbSet<SkUser> SkUser { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SkUser>().HasData(new SkUser[] {
            new SkUser { Id = 1, Email = "admin@email.com", FullName = "Admin", Username = "admin@email.com", PhoneNumber = "12345678", DateCreated = DateTime.Now, Password = "123456"},

            });

            base.OnModelCreating(builder);
        }
    }
}
