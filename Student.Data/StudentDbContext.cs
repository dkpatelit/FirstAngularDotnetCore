using Microsoft.EntityFrameworkCore;
using System;

namespace StudentSystem.Data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Tag> Tags { get; set; }

    }
}
