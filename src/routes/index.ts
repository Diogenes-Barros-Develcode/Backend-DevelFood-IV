import express from "express";
import notificationRoutes from "./notification.routes";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            message: 'Hello World'
        });
    })

    app.use(
        express.json(),
        notificationRoutes
    )
}

export {routes}