import express from "express";
import { notificationController } from "../controllers/notificationController";

const router = express.Router();

router
    .get("/notification/:id", notificationController.findUserNotification)
    .post("/notification", notificationController.creatNotificationeObject)
    .put("/notification/:id", notificationController.handleNotificationState)
    
export default router;