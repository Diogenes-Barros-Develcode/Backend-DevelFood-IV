import express from "express";
import { SMSController } from "../controllers/smsController";

const router = express.Router();

router
    .get("/sms", SMSController.listarNotificationsAccepted)
    .post("/sms", SMSController.smsNotificationAccepted)
    .delete("/sms/:id", SMSController.smsNotificationRejected)
    .put("/sms/:id", SMSController.atualizarSMS);

export default router;