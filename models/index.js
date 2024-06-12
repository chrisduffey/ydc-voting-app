// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./User');
const Vote = require('./Vote');
const Candidate = require('./Candidate');


// Define associations
User.belongsToMany(Candidate, {through: Vote, foreignKey: 'voterId', onDelete: 'CASCADE' });
Candidate.belongsToMany(User, { through: Vote, foreignKey: 'candidateId' });

// Candidate.hasMany(Vote, { foreignKey: 'candidateId', onDelete: 'CASCADE' });
// Vote.belongsTo(Candidate, { foreignKey: 'candidateId' });

// Election.hasMany(Vote, { foreignKey: 'electionId', onDelete: 'CASCADE' });
// Vote.belongsTo(Election, { foreignKey: 'electionId' });

const syncDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
};

module.exports = {
    User,
    Vote,
    Candidate,
    // Election,
    // sequelize,
    // syncDatabase,
};