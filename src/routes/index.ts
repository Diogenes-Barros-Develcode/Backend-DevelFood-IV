import express from "express";
import notification from "./notification.routes";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            message: 'Hello World'
        });
    })

    app.use(
        express.json(),
        notification
    )
}

export {routes}