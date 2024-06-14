const router = require('express').Router();
const userRoutes = require('./userRoutes');
const votingRoutes = require('./votingRoutes')
// const candidateRoutes = require('./candidateRoutes')


router.use('/users', userRoutes);
router.use('/vote', votingRoutes); // Add votingRoutes
// router.use('/candidates', candidateRoutes);

module.exports = router;
