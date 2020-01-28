module.exports = (app) => {
    const teachers = require('../controllers/teachers.controller.js');

    // Create a new teacher
    app.post('/teachers', teachers.create);

    // Retrieve all teachers
    app.get('/teachers', teachers.findAll);

    // Retrieve a single teacher with teachersId
    app.get('/teachers/:teacherId', teachers.findOne);

    // Update a teacher with teacherId
    app.put('/teachers/:teacherId', teachers.update);

    // Delete a teacher with teacherId
    app.delete('/teachers/:teacherId', teachers.delete);
}