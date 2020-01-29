const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring the database
require('dotenv').config()
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log("url: " + process.env.URL);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to School-model application." });
});

// Require Teachers routes
require('./routes/teachers.routes.js')(app);

// Require Students routes
require('./routes/students.routes.js')(app);

// Require Groups routes
require('./routes/groups.routes.js')(app);

// Require Timetables routes
require('./routes/timetables.routes.js')(app);

// Require Lectures routes
require('./routes/lectures.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});