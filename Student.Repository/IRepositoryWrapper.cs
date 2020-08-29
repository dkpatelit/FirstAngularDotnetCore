using System;
using System.Collections.Generic;
using System.Text;

namespace StudentSystem.Repository
{
    public interface IRepositoryWrapper
    {
        IStudentRepository Student { get; }
        void Save();
    }
}
