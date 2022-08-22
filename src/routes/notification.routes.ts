import express from "express";
import { notificationController } from "../controllers/notificationController";

const router = express.Router();

router
    .get("/notification", notificationController.listarNotificationsAccepted)
    .post("/notification", notificationController.notificationChangeState)
    
export default router;