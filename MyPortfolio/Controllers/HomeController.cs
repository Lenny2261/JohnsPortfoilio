using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using MyPortfolio.Models;
using System.Web.Configuration;

namespace MyPortfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            TempData["contactCheck"] = "";
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(ContactModel model)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var emailFrom = WebConfigurationManager.AppSettings["username"];

                    MailMessage mM = new MailMessage();
                    mM.From = new MailAddress(emailFrom);
                    mM.To.Add(WebConfigurationManager.AppSettings["emailto"]);
                    mM.Subject = model.name + " has sent you an email from your portfolio";
                    mM.Body = model.message + " Email: " + model.email;
                    mM.IsBodyHtml = true;

                    SmtpClient SmtpServer = new SmtpClient();

                    SmtpServer.Credentials = new System.Net.NetworkCredential(WebConfigurationManager.AppSettings["username"], WebConfigurationManager.AppSettings["password"]);
                    SmtpServer.Port = int.Parse(WebConfigurationManager.AppSettings["port"]);
                    SmtpServer.Host = WebConfigurationManager.AppSettings["host"];
                    SmtpServer.EnableSsl = true;
                    SmtpServer.Send(mM);

                    TempData["contactCheck"] = "Success";

                    return View("Index");
                }
                catch (Exception ex)
                {
                    TempData["contactCheck"] = "Failure";
                    return View("Index");
                }
            }
            else
            {
                TempData["contactCheck"] = "Failure";
                return View("Index", model);
            }
        }
    }
}