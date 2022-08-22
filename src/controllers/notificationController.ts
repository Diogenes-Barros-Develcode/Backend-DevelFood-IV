import { allowNotification } from "../models/notification";

class notificationController {

    static listarNotificationsAccepted = (request, response) => {
        allowNotification.find((err, sms) => {
            console.log(sms)
            return response.json(sms);
        })
    }

    static notificationChangeState = (request, response) => {
        console.log(request.body)

        const notification = new allowNotification(request.body);

        notification.save((error) => {
            if(!error) {
               return response.status(201).json();
            }

            return response.status(500).send({message: `${error.message} - Falha ao Mudar Status`})

        })
    }


}

export { notificationController };