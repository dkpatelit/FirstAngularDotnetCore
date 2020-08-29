using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Student.Data.Initializer
{
    public class DbInitializer : IDbInitializer
    {
        StudentDbContext _db;
        public DbInitializer(StudentDbContext db)
        {
            _db = db;
        }
        public void initialize()
        {
            try
            {
                if (_db.Database.GetPendingMigrations().Count() > 0)
                {
                    _db.Database.Migrate();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
