using StudentSystem.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentSystem.Repository
{
    public  class StudentRepository : RepositoryBase<Student>, IStudentRepository
    {
        public StudentRepository(StudentDbContext context) : base(context)
        {

        }
        // We can add new methods specific to the movie repository here in the future
    }
}
