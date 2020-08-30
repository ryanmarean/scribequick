using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScribeQuick.Models.WrapperModels
{
    [NotMapped]
    public class CharacterCreator
    {
        public Character NewCharacter { get; set; }
        public List<Deity> Deities { get; set; }
        public List<Role> Roles { get; set; }
        public List<Power> Powers { get; set; }
    }
}