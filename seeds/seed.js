const sequelize = require('../config/connection');
const seedUsers = require('./20240610120200-users-seed');
const newSeedCandidate = require('./20240610120000-candidates-seed')
const { Candidate} = require('../models')


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await Candidate.bulkCreate(newSeedCandidate)
  console.log('\n----- CANDIDATES SEEDED -----\n');

  process.exit(0);
};

seedAll();