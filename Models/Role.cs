using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ScribeQuick.Models
{
    public class Role
    {
        [Key]
        public int RoleId { get; set; }

        public string Name { get; set; }
        public string About { get; set; }

        //FKs

        //Navs
        public List<Character> Practitioners { get; set; }
        public List<Power> Powers { get; set; }
    }
}