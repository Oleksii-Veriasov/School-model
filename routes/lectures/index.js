module.exports = (app) => {
  const lectures = require('../../controllers/lectures.controller.js');

  // Create a new lecture
  app.post('/lectures', lectures.create);

  // Retrieve all lectures
  app.get('/lectures', lectures.findAll);

  // Retrieve a single lecture with lecturesId
  app.get('/lectures/:lectureId', lectures.findOne);

  // Update a lectures with lecturesId
  app.put('/lectures/:lectureId', lectures.update);

  // Delete a lecture with lectureId
  app.delete('/lectures/:lectureId', lectures.delete);
};
