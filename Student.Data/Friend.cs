using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StudentSystem.Data
{
    public class Friend
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
