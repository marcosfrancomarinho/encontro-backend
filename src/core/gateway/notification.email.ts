import type { Email } from '../entities/email.js';

export interface NotificationEmail {
  notified(email: Email): Promise<void>;
}
