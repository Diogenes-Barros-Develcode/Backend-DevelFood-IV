import express from "express";
import { db } from "./config/dbConnect";
import { allowNotification } from "./models/notification";
import { routes } from "./routes";

db.on("error", console.log.bind(console, "connection error"));
db.once("open", () => {
    console.log("connection successful");
});

const app = express();

app.use(express.json());

routes(app)

app.listen(3333, () => console.log("Server started on port 3333"));