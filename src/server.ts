import express from "express";
import { db } from "./config/dbConnect";
import { routes } from "./routes";
require('dotenv/config');

db.on("error", console.log.bind(console, "connection error"));
db.once("open", () => {
    console.log("connection successful");
});

const app = express();

app.use(express.json());

routes(app)

app.listen(process.env.DEV_PORT, () => console.log("Server started on port 3333"));