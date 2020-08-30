using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScribeQuick.Models
{
    public class Character
    {
        [Key]
        public int CharacterId { get; set; }

        //Primary Stats
        [Required]
        [MinLength(2)]
        public string Name { get; set; }
        public int Level { get; set; } = 1;
        public int GainedXP { get; set; } = 0;
        public int SpentXP { get; set; } = 0;
        public int SilverShekels { get; set; } = 15;

        //Derived Stats
        [NotMapped]
        public int WalkSpeed 
        { 
            get
            {
                return Speed;
            }
        }
        [NotMapped]
        public int RunSpeed
        { 
            get
            {
                return Speed * 2; 
            }
        }
        [NotMapped]
        public int SprintSpeed
        { 
            get
            {
                return Speed * 3;
            }
        }
        [NotMapped]
        public int HealthPoints
        { 
            get
            {
                return Strength + (Resilience * 2);
            }
        }
        [NotMapped]
        public int ActionPoints
        {
            get
            {
                return Agility + Strength;
            }
        }
        [NotMapped]
        public int Initiative
        {
            get
            {
                return Agility + Speed;
            }
        }
        [NotMapped]
        public int CarryWeight
        {
            get
            {
                return Strength + Resilience;
            }
        }
        [NotMapped]
        public int AvailableXP
        {
            get
            {
                return GainedXP - SpentXP;
            }
        }

        //Attributes
        [Display(Name="Melee Proficiency")]
        public int MeleeProficiency { get; set; }
        [Display(Name="Ranged Proficiency")]
        public int RangedProficiency { get; set; }
        public int Speed { get; set; }
        public int Agility { get; set; }
        public int Strength { get; set; }
        public int Resilience { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
        public int Faith { get; set; }

        //Skills
        [Display(Name="Melee Weapons")]
        public int MeleeWeapons { get; set; }
        [Display(Name="Ranged Weapons")]
        public int RangedWeapons { get; set; }
        public int Traps { get; set; }
        public int Block { get; set; }
        public int Dodge { get; set; }
        public int Stealth { get; set; }
        public int Climbing { get; set; }
        public int Wrestle { get; set; }
        public int Survival { get; set; }
        public int Conjuration { get; set; }
        [Display(Name="Craft Item")]
        public int CraftItem { get; set; }
        public int Knowledge { get; set; }
        public int Sorcery { get; set; }
        public int Perception { get; set; }
        public int Persuation { get; set; }
        public int Seduction { get; set; }
        public int Intimidation { get; set; }
        public int Disguise { get; set; }
        public int Animals { get; set; }
        public int Barter { get; set; }
        [Display(Name="Social Posturing")]
        public int SocialPosturing { get; set; }
        public int Invocation { get; set; }
        public int Healing { get; set; }
        public int Willpower { get; set; }
        public int Leadership { get; set; }
        public int Divination { get; set; }

        //FKs
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public int DeityId { get; set; }

        //Nav
        public User Creator { get; set; }
        public Role Role { get; set; }
        public Deity Deity { get; set; }
        public List<CharacterPower> ChosenPowers { get; set; }
        // public List<Equipment> Equipment { get; set; }
        // public List<Armor> Armor { get; set; }
        // public List<Weapon> Weapons { get; set; }
    }
}