import express from 'express';
import cors from 'cors';
import { NotificationController } from './controller/notification.controller.js';
import { NotificationServices } from './core/services/notification.services.js';
import { ResendNotification } from './infra/resend.notification.js';
const app = express();

const notification = new ResendNotification();
const notificationServices = new NotificationServices(notification);
const notificationController = new NotificationController(notificationServices);

app.use(cors());
app.use(express.json());

app.post('/notification', (req, res) => notificationController.execute(req, res));

export default app;
