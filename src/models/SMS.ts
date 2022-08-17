import mongoose from "mongoose";

const SMSSchema = new mongoose.Schema({
    accepted: {type: Boolean, require: true},
    phone: {type: String, require: true},
    message: {type: String, require: true},
    date: {type: Date, require: true}
});

const SMS = mongoose.model("SMS", SMSSchema);

export { SMS };