module.exports = (app) => {
  const users = require('../../controllers/users.controller.js');

  // authenticate a user
  app.post('/users', users.authenticate);

  // Retrieve all users
  app.get('/users', users.getAll);
};
