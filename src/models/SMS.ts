import mongoose from "mongoose";

const SMSSchema = new mongoose.Schema({
    accepted: {type: Boolean, require: true},
    name: {type: String, require: true},
});

const SMS = mongoose.model("SMS", SMSSchema);

export { SMS };