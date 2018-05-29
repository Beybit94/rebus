using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace rebus.DAL.Model
{
    [Table("Rebuses")]
    public class Rebus:Entity
    {
        public string Img { get; set; }
        public string Answer { get; set; }

    }
}
