import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://diogenes:madi123@notifications.hzir8nb.mongodb.net/notification-develfood-IV');

const db = mongoose.connection;

export { db };