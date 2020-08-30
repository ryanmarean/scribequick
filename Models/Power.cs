using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ScribeQuick.Models
{
    public class Power
    {
        [Key]
        public int PowerId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Challenge { get; set; }
        public string Duration { get; set; }
        public bool IsDivine { get; set; }

        public string SkillTreeName { get; set; }
        public int Tier { get; set; }

        // public int CurrentLevel { get; set; }
        public int MaximumLevel { get; set; }

        //FKs
        // public int CharacterId { get; set; }
        public int? RoleId { get; set; }
        public int? DeityId { get; set; }

        //Navs
        public virtual Role Role { get; set; }
        public virtual Deity Deity { get; set; }
        public List<CharacterPower> ChosenBy { get; set; }
    }
}