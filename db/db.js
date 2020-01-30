// Configuring the database
require('dotenv').config({ path: './config/.env' });
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
module.exports = mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to the database');
}).catch((err) => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
