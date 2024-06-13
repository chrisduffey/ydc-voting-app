const { User } = require('../models');

const userData = [
  // { username: 'MagicJohnson', email: 'lakeshow@example.com', password: 'password12' },
  // { username: 'RandyOrton', email: 'RKOyamama2@example.com', password: 'password22' },
  // { username: 'Lizzo', email: 'thickandfluffy@example.com', password: 'password32' },
  // { username: 'Metta', email: 'worldpeace@example.com', password: 'password42' },
  // { username: 'MikeTyson', email: 'user5@example.com', password: 'password52' },
];

const seedUsers = async () => {
  const users = await User.bulkCreate(userData);
};

module.exports = seedUsers;
