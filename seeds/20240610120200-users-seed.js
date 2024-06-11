const { User } = require('../models');

const userData = [
  { username: 'MagicJohnson', email: 'lakeshow@example.com', password: 'password1' },
  { username: 'RandyOrton', email: 'RKOyamama2@example.com', password: 'password2' },
  { username: 'Lizzo', email: 'thickandfluffy@example.com', password: 'password3' },
  { username: 'Metta', email: 'worldpeace@example.com', password: 'password4' },
  { username: 'MikeTyson', email: 'user5@example.com', password: 'password5' },
];

const seedUsers = async () => {
  const users = await User.bulkCreate(userData);
};

module.exports = seedUsers;
