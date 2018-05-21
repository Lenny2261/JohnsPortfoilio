using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using MyPortfolio.Models;

namespace MyPortfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Contact(ContactModel model)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    MailMessage mM = new MailMessage();
                    mM.From = new MailAddress("juan226611@yahoo.com");
                    mM.To.Add("juan226611@yahoo.com");
                    mM.Subject = model.name + " has sent you an email";
                    mM.Body = model.message + " test " + model.email;
                    mM.IsBodyHtml = true;

                    SmtpClient SmtpServer = new SmtpClient();

                    SmtpServer.Credentials = new System.Net.NetworkCredential("juan226611@yahoo.com", "penguins82");
                    SmtpServer.Port = 587;
                    SmtpServer.Host = "smtp.mail.yahoo.com";
                    SmtpServer.EnableSsl = true;
                    SmtpServer.Send(mM);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("This shouldn't happen");
                }
            }

            return View("Index", model);
        }
    }
}