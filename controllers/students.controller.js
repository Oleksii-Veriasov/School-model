const Students = require('../models/students.model.js');

// Create and Save a new student
exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({
      message: 'Students content can not be empty',
    });
  }
  // Create a student
  const student = new Students({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    group: req.body.group,
  });

  // Save Student in the database
  student.save()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the new Student.',
      });
    });
};


// Retrieve and return all students from the database.
exports.findAll = (req, res) => {
  Students.find()
    .then((students) => {
      res.send(students);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving list of students.',
      });
    });
};

// Find a single student with a studentId
exports.findOne = (req, res) => {
  Students.findById(req.params.studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).send({
          message: `Not found student with id ${req.params.studentId}`,
        });
      }
      res.send(student);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Not found Student with id ${req.params.studentId}`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving student with id ${req.params.studentId}`,
      });
    });
};

// Update a student identified by the studentId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: 'Students new data can not be empty',
    });
  }

  // Find Students and update it with the request body
  Students.findByIdAndUpdate(req.params.studentId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      group: req.body.group,
    }, { new: true })
    .then((student) => {
      if (!student) {
        return res.status(404).send({
          message: `Not found student with id ${req.params.studentId}`,
        });
      }
      res.send(student);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Not found student with id ${req.params.studentId}`,
        });
      }
      return res.status(500).send({
        message: `Error updating student data with id ${req.params.studentId}`,
      });
    });
};

// Delete a student with the specified studentId in the request
exports.delete = (req, res) => {
  Students.findByIdAndRemove(req.params.studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).send({
          message: `Not found student with id ${req.params.studentId}`,
        });
      }
      res.send({ message: 'Student deleted successfully!' });
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Not found student with id ${req.params.studentId}`,
        });
      }
      return res.status(500).send({
        message: `Could not delete student with id ${req.params.studentId}`,
      });
    });
};
