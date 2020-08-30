using System.ComponentModel.DataAnnotations;

namespace ScribeQuick.Models
{
    public class CharacterPower
    {
        [Key]
        public int Id { get; set; }
        public int CurrentLevel { get; set; }

        //FKs
        public int CharacterId { get; set; }
        public int PowerId { get; set; }

        //Navs
        public Character Character { get; set; }
        public Power Power { get; set; }
    }
}