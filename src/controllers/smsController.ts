import { SMS } from "../models/SMS";

class SMSController {

    static listarNotificationsAccepted = (request, response) => {
        SMS.find((err, sms) => {
            return response.json(sms);
        })
    }

    static smsNotificationAccepted = (request, response) => {
        const sms = new SMS(request.body);

        sms.save((err, sms) => {
            if (err) {
                return response.status(500).send(err);
            }
            return response.status(200).send(sms);
        })
    }

    static atualizarSMS = (request, response) => {
        const id = request.params.id;

        SMS.findByIdAndUpdate(id, {$set: request.body}, (err) => {
            if(!err){
                return response.status(200).send({message: 'Atualizado'});
            } else {
                return response.status(500).send({message: 'Erro ao atualizar'});
            }
        })
    }

    static smsNotificationRejected = (request, response) => {
        const id = request.params.id;

        SMS.findByIdAndDelete(id, (err) => {
            if (err) {
                return response.status(500).send(err);
            }
            return response.status(200).send({
                message: "SMS deleted successfully"
            });
        })
    }

}

export { SMSController };