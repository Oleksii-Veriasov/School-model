const users = [{
    id: 1,
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'User',
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    firstName: 'User',
    lastName: 'User',
  },
];

const Users = require('../models/users.model.js');

async function authenticate({ username, password }) {
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

module.exports = {
  authenticate,
  getAll,
};
