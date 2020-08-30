using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ScribeQuick.Models;
using ScribeQuick.Models.WrapperModels;

namespace ScribeQuick.Controllers
{
    public class LoginRegController : Controller
    {
        private ScribeQuickContext db;
        public LoginRegController(ScribeQuickContext context)
        {
            db = context;
        }

        [HttpPost]
        public IActionResult Register(LoginRegUser postData)
        {
            User newUser = postData.User;
            if (ModelState.IsValid)
            {
                // Check if email exists in DB
                if (db.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("User.Email","This email is already in use.");
                    return View("Index");
                }

                // Hash incoming user password
                PasswordHasher<User> hasher = new PasswordHasher<User>();
                newUser.Password = hasher.HashPassword(newUser, newUser.Password);

                // Add new user to DB
                db.Users.Add(newUser);
                db.SaveChanges();
                
                // Add user to session and redirect to Dashboard
                HttpContext.Session.SetInt32("UserId",newUser.UserId);
                return RedirectToAction("Dashboard","Home");
            }
            return View("Index");
        }

        [HttpPost]
        public IActionResult Login(LoginRegUser postData)
        {
            LoginUser loginAttempt = postData.LoginUser;
            if (ModelState.IsValid)
            {
                // Verify user exists in DB
                User dbUser = db.Users.FirstOrDefault(uemail => uemail.Email == loginAttempt.Email);
                if (dbUser == null)
                {
                    ModelState.AddModelError("LoginUser.Email","Invalid email and password combination");
                    return View("Index");
                }

                // Check submitted password against db password
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                PasswordVerificationResult result = hasher.VerifyHashedPassword(loginAttempt, dbUser.Password, loginAttempt.Password);
                if (result == 0)
                {
                    ModelState.AddModelError("LoginUser.Password","Invalid email and password combination");
                    return View("Index");
                }

                // if successful, add user to session and redirect to dashboard
                HttpContext.Session.SetInt32("UserId",dbUser.UserId);
                return RedirectToAction("Dashboard","Home");
            }
            return View("Index");
        }

        [HttpGet]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index","Home");
        }
    }
}