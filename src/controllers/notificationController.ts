import { response } from "express";
import { allowNotification } from "../models/notification";

class notificationController {

    static listarNotificationsAccepted = (request, response) => {
        allowNotification.find((err, sms) => {
            return response.json(sms);
        })
    }

    static notificationCreateObject = (request, response) => {
        console.log(request.body)

        const notification = new allowNotification(request.body);

        notification.save((error) => {
            if(!error) {
               return response.status(201).json();
            }

            return response.status(500).send({message: `${error.message} - Falha ao Mudar Status`})

        })
    }

    static notificationAtualizeState = (request, response) => {
        const id = request.params.id;

        allowNotification.findByIdAndUpdate(id, {
            $set: {
                userID: request.params.userID,
                allowSMS: request.params.allowSMS,
                allowEmail: request.params.allowEmail,
                allowCall: request.params.allowCall,
            }
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