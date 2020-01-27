module.exports = (app) => {
    const teachers = require('../controllers/teachers.controller.js');

    // Create a new teachers
    app.post('/teachers', teachers.create);

    // Retrieve all teachers
    app.get('/teachers', teachers.findAll);

    // Retrieve a single Note with teachersId
    app.get('/teachers/:teacherId', teachers.findOne);

    // Update a Note with teacherId
    app.put('/teachers/:teacherId', teachers.update);

    // Delete a Note with teacherId
    app.delete('/teachers/:teacherId', teachers.delete);
}