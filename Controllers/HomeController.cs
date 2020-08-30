using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ScribeQuick.Extensions;
using ScribeQuick.Models;
using ScribeQuick.Models.WrapperModels;

namespace ScribeQuick.Controllers
{
    public class HomeController : Controller
    {
        private ScribeQuickContext db;
        public HomeController(ScribeQuickContext context)
        {
            db = context;
        }

        public int? uid
        {
            get
            {
                return HttpContext.Session.GetInt32("UserId");
            }
        }

        public bool IsLoggedIn
        {
            get
            {
                return uid != null;
            }
        }

        // public Character GetNewCharacter
        // {
        //     get
        //     {
        //         return HttpContext.Session.GetObjectFromJson<Character>("NewCharacter");
        //     }
        // }

        // public bool StartedCharacter
        // {
        //     get
        //     {
        //         return GetNewCharacter != null;
        //     }
        // }

        public IActionResult Index()
        {
            
            return View();
        }

        public IActionResult Dashboard()
        {
            if (!IsLoggedIn)
            {
                return View("Index");
            }
            User thisUser = db.Users
                .Include(c => c.CreatedCharacters)
                .ThenInclude(r => r.Role)
                .Include(c => c.CreatedCharacters)
                .ThenInclude(d => d.Deity)
                .FirstOrDefault(u => u.UserId == uid);
            return View(thisUser);
        }

        public IActionResult CharacterCreation()
        {
            if (!IsLoggedIn)
            {
                return View("Index");
            }
            List<Deity> allDeities = db.Deities.ToList();
            List<Role> allRoles = db.Roles.ToList();
            List<Power> allPowers = db.Powers
                .OrderBy(tree => tree.SkillTreeName)
                .ToList();
            CharacterCreator creationView = new CharacterCreator()
            {
                Deities = allDeities,
                Roles = allRoles,
                Powers = allPowers,
            };
            return View(creationView);
        }

        [HttpGet("/choosedeity/{deityId}")]
        public JsonResult ChooseDeity(int deityId)
        {
            HttpContext.Session.Remove("Deity");
            Deity chosenDeity = db.Deities.FirstOrDefault(id => id.DeityId == deityId);
            HttpContext.Session.SetObjectAsJson("Deity",chosenDeity);
            return Json(chosenDeity);
        }

        [HttpGet("/chooserole/{roleId}")]
        public JsonResult ChooseRole(int roleId)
        {
            HttpContext.Session.Remove("Role");
            Role chosenRole = db.Roles.FirstOrDefault(id => id.RoleId == roleId);
            HttpContext.Session.SetObjectAsJson("Role",chosenRole);
            return Json(chosenRole);
        }

        [HttpGet("/choosepower/{powerId}")]
        public JsonResult ChoosePower(int powerId)
        {
            Power chosenPower = db.Powers.FirstOrDefault(id => id.PowerId == powerId);
            if (chosenPower.IsDivine)
            {
                HttpContext.Session.SetObjectAsJson("DivinePower",chosenPower);
            }
            else
            {
                HttpContext.Session.SetObjectAsJson("RolePower",chosenPower);
            }
            return Json(chosenPower);
        }

        [HttpPost]
        public IActionResult AddCharacter(Character newCharacter)
        {
            if(ModelState.IsValid)
            {
                //Populate Creator, Deity, and Role from session information
                newCharacter.Creator = db.Users.FirstOrDefault(id => id.UserId == uid);
                newCharacter.DeityId = HttpContext.Session.GetObjectFromJson<Deity>("Deity").DeityId;
                newCharacter.RoleId = HttpContext.Session.GetObjectFromJson<Role>("Role").RoleId;
                
                //Populate Divine Power and Role Power in CharacterPowers table from session
                Power divinePowerJson = HttpContext.Session.GetObjectFromJson<Power>("DivinePower");
                Power rolePowerJson = HttpContext.Session.GetObjectFromJson<Power>("RolePower");
                CharacterPower divineCharacterPower = new CharacterPower()
                {
                    Character = newCharacter,
                    PowerId = divinePowerJson.PowerId,
                    CurrentLevel = 1,
                };
                CharacterPower roleCharacterPower = new CharacterPower()
                {
                    Character = newCharacter,
                    PowerId = rolePowerJson.PowerId,
                    CurrentLevel = 1,
                };
                db.Characters.Add(newCharacter);
                db.CharacterPowers.Add(divineCharacterPower);
                db.CharacterPowers.Add(roleCharacterPower);
                db.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            List<Deity> allDeities = db.Deities.ToList();
            List<Role> allRoles = db.Roles.ToList();
            List<Power> allPowers = db.Powers
                .OrderBy(tree => tree.SkillTreeName)
                .ToList();
            CharacterCreator creationView = new CharacterCreator()
            {
                Deities = allDeities,
                Roles = allRoles,
                Powers = allPowers,
            };
            return View("CharacterCreation",creationView);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
