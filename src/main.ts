import express from 'express';
import { NotificationController } from './controller/notification.controller.js';
import cors from 'cors';
import { NotificationServices } from './core/services/notification.services.js';
import { ResendNotification } from './infra/resend.notification.js';
import 'dotenv/config';

function main() {
  const app = express();
  const notification = new ResendNotification();
  const notificationServices = new NotificationServices(notification);
  const notificationController = new NotificationController(notificationServices);

  app.use(cors());
  app.use(express.json());

  app.post('/notification', (request, response) => notificationController.execute(request, response));

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

main();
