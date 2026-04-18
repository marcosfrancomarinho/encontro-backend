import type { Request, Response } from 'express';
import type { NotificationServices } from '../core/services/notification.services.js';
import { Input } from '../core/dto/input.js';

export class NotificationController {
  public constructor(private notificationServices: NotificationServices) {}

  public async execute(request: Request, response: Response) {
    try {
      const { to, subject } = request.body;
      const input = new Input(to, subject);
      const output = await this.notificationServices.sendEmail(input);
      response.send(output);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', error.message);
        return;
      }
      response.status(500).send('Error sending email');
    }
  }
}
