const router = require('express').Router();
const userRoutes = require('./userRoutes');
const votingRoutes = require('./votingRoutes')

router.use('/users', userRoutes);
router.use('/vote', votingRoutes); // Add votingRoutes

module.exports = router;
