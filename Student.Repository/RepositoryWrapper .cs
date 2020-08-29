using StudentSystem.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentSystem.Repository
{
    public class RepositoryWrapper: IRepositoryWrapper
    {
        private StudentDbContext _dbContext;

        private IStudentRepository _student;
        

        public RepositoryWrapper(StudentDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IStudentRepository Student
        {
            get
            {
                if (_student == null)
                {
                    _student = new StudentRepository(_dbContext);
                }
                return _student;
            }
        }
        
        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
