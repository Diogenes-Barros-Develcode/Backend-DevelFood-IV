import mongoose from "mongoose";

const PrivacySchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    allowSMS: {type: Boolean, require: true},
    allowEmail: {type: Boolean, require: true},
    allowCall: {type: Boolean, require: true},
});

const allowNotification = mongoose.model("PrivacySchema", PrivacySchema);

export { allowNotification };