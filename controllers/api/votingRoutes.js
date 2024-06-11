const express = require('express');
const router = express.Router();
const { User, Candidate, Vote } = require('../../models');

// Route to submit a vote
router.post('/vote', async (req, res) => {
  try {
    // Extract vote data from request body
    const { userId, candidateId } = req.body;

    // Validate user and candidate existence
    const user = await User.findByPk(userId);
    const candidate = await Candidate.findByPk(candidateId);
    if (!user || !candidate) {
      return res.status(400).json({ error: 'Invalid user or candidate' });
    }

    // Create a new vote record
    const vote = await Vote.create({ voterId: userId, candidateId });

    // Respond with success message
    res.status(201).json({ message: 'Vote submitted successfully', vote });
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
