using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ScribeQuick.Models
{
    public class Deity
    {
        [Key]
        public int DeityId { get; set; }

        public string Name { get; set; }
        public string About { get; set; }

        public string PassivePowerName { get; set; }
        public string PassivePowerDesc { get; set; }

        public string CriticalPowerName { get; set; }
        public string CriticalPowerDesc { get; set; }

        public string PreferredSacrifice { get; set; }

        //FKs

        //Nav
        public List<Character> Champions { get; set; }
        public List<Power> Powers { get; set; }

    }
}