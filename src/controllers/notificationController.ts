import { Request, Response, response } from "express";
import { notificationConfig } from "../models/notification";

class notificationController {

    static findUserNotification = (request, response: Response) => {
        notificationConfig.findOne((err, sms) => {
            return response.json(sms);
        })
    }

    static creatNotificationeObject = (request: Request, response: Response) => {
        console.log(request.body)

        const notification = new notificationConfig(request.body);

        notification.save((error) => {
            if(!error) {
               return response.status(201).json();
            }

            return response.status(500).send({message: `${error.message} - Falha ao Mudar Status`})

        })
    }

    static handleNotificationState = (request: Request, response: Response) => {
        const id = request.params.id;

        notificationConfig.findByIdAndUpdate(id, {
            $set: request.body
        }, (error) => {
          if(!error) {
            response.status(200).send({message: 'atualizado'})
          } else {
            response.status(500).send({message: error.message})
          }
        }
       )
    }


}

export { notificationController };