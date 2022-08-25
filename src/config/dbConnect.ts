import mongoose from 'mongoose';
require('dotenv/config');

mongoose.connect(process.env.MONGODB_CONNECTION);

const db = mongoose.connection;

export { db };