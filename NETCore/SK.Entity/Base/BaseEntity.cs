using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SK.Entity.Base
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }



        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}
