using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Student.Data
{
    public class Friend
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
