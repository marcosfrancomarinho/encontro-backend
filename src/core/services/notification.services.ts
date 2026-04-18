import type { Input } from '../dto/input.js';
import { Output } from '../dto/output.js';
import { Email } from '../entities/email.js';
import type { NotificationEmail } from '../gateway/notification.email.js';

export class NotificationServices {
  public constructor(private notificationEmail: NotificationEmail) {}

  public async sendEmail(input: Input): Promise<Output> {
    const email = new Email(input.to, input.subject);
    await this.notificationEmail.notified(email);
    return new Output('Email sent successfully');
  }
}
