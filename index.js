const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const connectDB = require("./config/database");

const { workerData, parentPort } = require("worker_threads");
const { handleError } = require("./services/error.service");


console.log('workerData', workerData)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



connectDB()

app.use(express.json({ extended: false }));

require('./routes/routes')(app);

app.use(handleError);

app.listen(8000,() => {
    console.log("Server is up on port 5000.");
})

module.exports = { app};