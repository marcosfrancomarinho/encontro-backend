import type { Email } from '../core/entities/email.js';
import type { NotificationEmail } from '../core/gateway/notification.email.js';
import { Resend } from 'resend';

export class ResendNotification implements NotificationEmail {
  private resend: Resend;

  public constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY!);
  }

  public async notified(email: Email): Promise<void> {
    await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email.getTo(),
      subject: email.getSubject(),
      html: email.getBody(),
    });
  }
}