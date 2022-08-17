import express from "express";
import { db } from "./config/dbConnect";
import { SMS } from "./models/SMS";

db.on("error", console.log.bind(console, "connection error"));
db.once("open", () => {
    console.log("connection successful");
});

const app = express();

app.get('/sms', (request, response) => {
    SMS.find((err, sms) => {
        return response.json(sms);
    })
})

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333, () => console.log("Server started on port 3333"));