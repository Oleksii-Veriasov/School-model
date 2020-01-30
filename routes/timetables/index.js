module.exports = (app) => {
  const timetables = require('../../controllers/timetables.controller.js');


  // Create a new timetable
  app.post('/timetables', timetables.create);

  // Retrieve all timetables
  app.get('/timetables', timetables.findAll);

  // Update a timetable with timetableId
  app.put('/timetables/:timetableId', timetables.update);

  // Delete a timetable with timetableId
  app.delete('/timetables/:timetableId', timetables.delete);
};
