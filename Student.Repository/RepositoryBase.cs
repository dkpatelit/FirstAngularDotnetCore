using Microsoft.EntityFrameworkCore;
using StudentSystem.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace StudentSystem.Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected StudentDbContext dbContext { get; set; }
        public RepositoryBase(StudentDbContext databaseContext)
        {
            this.dbContext = databaseContext;
        }
        public IQueryable<T> FindAll()
        {
            return this.dbContext.Set<T>().AsNoTracking();
        }
        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.dbContext.Set<T>().Where(expression).AsNoTracking();
        }
        public void Create(T entity)
        {
            this.dbContext.Set<T>().Add(entity);
        }
        public void Update(T entity)
        {
            this.dbContext.Set<T>().Update(entity);
        }
        public void Delete(T entity)
        {
            this.dbContext.Set<T>().Remove(entity);
        }
    }
}
