import { Router } from "express";

const smsRouter = Router();

smsRouter.post("/sms", (request, response) => {
    const { phone, message } = request.body;
})

export {smsRouter};