module.exports = (app) => {
    const students = require('../controllers/students.controller.js');

    // Create a new student
    app.post('/students', students.create);

    // Retrieve all students
    app.get('/students', students.findAll);

    // Retrieve a single student with studentsId
    app.get('/students/:studentsId', students.findOne);

    // Update a student with studentsId
    app.put('/students/:studentsId', students.update);

    // Delete a student with studentsId
    app.delete('/students/:studentsId', students.delete);
}