const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const express = require("express");

const app = express(); // initialize app

const config = {
    views: "views", // Set views directory
    static: "public", // Set static assets directory
    logging: true,

    /*  To use the Turbo 360 CMS, from the terminal run
        $ turbo extend cms
        then uncomment line 21 below: */

    db: vertex.nedb(),
};

vertex.configureApp(app, config);

//import routes
const main = require("./routes/main");
app.use("/", main);

// set routes
//app.use('/', index)

module.exports = app;