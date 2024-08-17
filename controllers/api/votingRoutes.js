const express = require('express');
const router = express.Router();
const { User, Candidate, Vote } = require('../../models');
const { count } = require('../../models/User');


router.get("/", async (req, res) => {
  res.render("/", {
    logged_in: req.session.logged_in,
  })
});


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
    // one vote per user
    const existingVote = await Vote.findOne({
      where: {
        voterId: userId,
      },
    });

    if (existingVote) {
      return res.status(400).json({ error: 'You have already cast your vote' });
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
//update vote count
router.put('/:id', async (req, res) => {
  try {
    const voteData = await Candidate.increment("count", {
      by: 1,
      where: {

        id: req.params.id,
      },
    });
    await User.update({vote:true}, {where:{id:req.session.user_id}})

    res.status(200).json(voteData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
