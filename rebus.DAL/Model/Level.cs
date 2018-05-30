using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace rebus.DAL.Model
{
    [Table("Levels")]
    public class Level:Entity
    {
        public string Name { get; set; }
        public bool IsPro { get; set; }

        [NotMapped]
        public List<Rebus> Rebuses { get; set; }
    }
}
