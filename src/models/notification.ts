import mongoose from "mongoose";

const NotificationConfigSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    allowSMS: {type: Boolean, require: true},
    allowEmail: {type: Boolean, require: true},
    allowCall: {type: Boolean, require: true},
});

const notificationConfig = mongoose.model("PrivacySchema", NotificationConfigSchema);

export { notificationConfig };