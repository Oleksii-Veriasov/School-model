const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('./middlewares/auth');
const errorHandler = require('./middlewares/error-handler');
const cors = require('cors');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(basicAuth);

require('./db/db.js');

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to School-model application.' });
});

// Require Teachers routes
require('./routes/users/')(app);

// Require Teachers routes
require('./routes/teachers/')(app);

// Require Students routes
require('./routes/students/')(app);

// Require Groups routes
require('./routes/groups/')(app);

// Require Timetables routes
require('./routes/timetables/')(app);

// Require Lectures routes
require('./routes/lectures/')(app);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
