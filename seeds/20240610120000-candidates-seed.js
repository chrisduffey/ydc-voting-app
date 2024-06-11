const { Candidate } = require('../models');

const candidatesData = [
    {
        name: 'Donald Stump',
        party: 'Demacrip',
    },
    {
        name: 'Slow Biden',
        party: 'Rebloodican',
    },
    {
        name: 'Elliot Jamie',
        party: 'Independent',
    },

]
const seedCandidates = () => Candidate.bulkCreate(candidatesData);

module.exports = seedCandidates;