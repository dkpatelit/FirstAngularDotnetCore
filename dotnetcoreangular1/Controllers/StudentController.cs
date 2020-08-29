using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentSystem.Data;
using StudentSystem.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace dotnetcoreangular1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public IRepositoryWrapper _repo;

        public StudentController(IRepositoryWrapper repo)
        {
            _repo = repo;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            var data = _repo.Student.FindAll().ToList();

            return data;
        }

        [HttpPost]
        public void Post([FromBody] Student student)
        {
            _repo.Student.Create(student);
            _repo.Save();
        }
    }
}
