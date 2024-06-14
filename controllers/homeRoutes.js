const router = require('express').Router();
const { Candidate } = require('../models');
const {User} = require('../utils/auth');


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

router.get("/candidate", async (req, res)=> {
    
    try {
        const candidateData= await Candidate.findAll()
        const candidates= candidateData.map(c =>c.get({plain: true}))
        res.render("candidate", {candidates})
        
    } catch (err) {
        res.status(500).json(err.message)
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
        const candidates = candidateData.map(c => c.get({ plain: true }));

        // Render the voting page with the candidate data
        res.render("vote", { candidates });
    } catch (err) {
        // Handle any errors
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;