const router = require('express').Router();
const { Candidate, User } = require('../models');
const withAuth = require('../utils/auth');


router.get("/", async (req, res)=> {
    res.render("hompage", {
        logged_in: req.session.logged_in,
    })
});

router.get("/login", async (req, res) => {
    if(req.session.logged_in){
        return res.redirect("/candidate")
        // create vote page and route
    }
    res.render("login")
}),

router.get("/candidate", withAuth,async (req, res) => {
  try {
    const candidateData = await Candidate.findAll({
      order: [["name", "DESC"]],
    });
    const candidates = candidateData.map((c) => c.get({ plain: true }));
    const userData= await User.findByPk(req.session.user_id);
    const user = userData.get({plain:true});
    const isLoggedIn = req.session.isLoggedIn || false;
    res.render("candidate", { candidates, logged_in: req.session.logged_in, user, isLoggedIn });
  } catch (err) {
    res.status(500).json(err.message);
  }
});
router.get("/vote", async (req, res) => {
    try {
        // Check if user is logged in
        if (!req.session.logged_in) {
            // If not logged in, redirect to login page
            return res.redirect("/login");
        }

        // Fetch data needed for the voting page
        const candidateData = await Candidate.findAll();
        console.log(candidateData);
        const candidates = candidateData.map(c => c.get({ plain: true }));
        console.log(candidates);

        // Render the voting page with the candidate data
        res.render("vote", { candidates });
    } catch (err) {
        // Handle any errors
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;