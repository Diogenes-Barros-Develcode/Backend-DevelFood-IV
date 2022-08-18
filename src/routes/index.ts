import express from "express";
import sms from "./sms.routes";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            message: 'Hello World'
        });
    })

    app.use(
        express.json(),
        sms
    )
}

export {routes}