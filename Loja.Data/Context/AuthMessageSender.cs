using Loja.Domain.Intefaces;
using Loja.Domain.Model;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Data.Context
{
  public class AuthMessageSender : IEmailSender
  {
    public AuthMessageSender(IOptions<EmailSettings> emailSettings)
    {
      _emailSettings = emailSettings.Value;
    }

    public EmailSettings _emailSettings { get; }

    public Task SendEmailAsync(string email, string subject, string message)
    {
      try
      {
        Execute(email, subject, message).Wait();
        return Task.FromResult(0);
      }
      catch (Exception)
      {
        throw;
      }
    }

    public async Task Execute(string email, string subject, string message)
    {
      try
      {
        var toEmail = string.IsNullOrEmpty(email) ? _emailSettings.ToEmail : email;

        MailMessage mail = new MailMessage()
        {
          From = new MailAddress(_emailSettings.FromAddress, _emailSettings.FromName)
        };
        if (!string.IsNullOrEmpty(email))
          mail.CC.Add(new MailAddress(email));

        if (!string.IsNullOrEmpty(email))
          mail.Bcc.Add(new MailAddress(email));

        mail.Subject = subject;
        mail.Body = message;
        mail.IsBodyHtml = true;
        mail.Priority = MailPriority.Normal;

        using (SmtpClient smtp = new SmtpClient(_emailSettings.ServerAddress, _emailSettings.ServerPort))
        {
          smtp.Credentials = new NetworkCredential(_emailSettings.Username, _emailSettings.Password);
          smtp.EnableSsl = _emailSettings.ServerUseSsl;

          await smtp.SendMailAsync(mail);
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }
  }
}

