import express from "express";
import { notificationController } from "../controllers/notificationController";

const router = express.Router();

router
    .get("/notification/:id", notificationController.listarNotificationsAccepted)
    .post("/notification", notificationController.notificationCreateObject)
    .put("/notification/:id", notificationController.notificationAtualizeState)
    
export default router;