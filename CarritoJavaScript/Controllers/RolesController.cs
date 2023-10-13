using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CarritoJavaScript.Controllers
{
    public class RolesController : Controller
    {
        // GET: Roles
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Manage()
        {
            return View();
        }
        public JsonResult RolesList()
        {
            var response = Models.Role.RolesList();
            return Json(response, JsonRequestBehavior.AllowGet);
        }
    }
}