const sequelize = require('../config/connection');
const seedCandidates = require('./20240610120000-candidates-seed');
const seedUsers = require('./20240610120200-users-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCandidates();
  console.log('\n----- CANDIDATES SEEDED -----\n');

  process.exit(0);
};

seedAll();
