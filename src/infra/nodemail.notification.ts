import type { Email } from '../core/entities/email.js';
import type { NotificationEmail } from '../core/gateway/notification.email.js';
import nodemail from 'nodemailer';

export class NodemailNotification implements NotificationEmail {
  private transporter: nodemail.Transporter;
  public constructor() {
    this.transporter = nodemail.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  public async notified(email: Email): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email.getTo(),
      subject: email.getSubject(),
      html: email.getBody(),
    });
  }
}
