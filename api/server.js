// Badges API - Create / Get / Display badges across gameservers

// Setup express
const express = require("express")
const app = express()
const log = require("./utils/log")

// Environment Variables
const { PORT, MONGO_HOST, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT } = require("./config/config")

// Connect to mongodb database
const mongoose = require("mongoose")
const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/`
connectToDB = () => {
    log('Conecting to database!', 'cyan')

    mongoose.connect(connectionString, {
        useNewUrlParser: true
    })
        .then(() => {
            log('Successfully connected to database!', 'green');
        })
        .catch((err) => {
            log('Error connecting to the database!', 'red');
            setTimeout(connectToDB, 5000);
        });
}

connectToDB(true)

// This is an example route, feel free to delete it.
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World!"
    })
})

// Listen on a port!
app.listen(PORT, () => log(`Server listening on port ${PORT}!`, 'green'))
