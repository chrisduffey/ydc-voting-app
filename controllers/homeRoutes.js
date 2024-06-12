const router = require('express').Router();
const { Candidate } = require('../models');
const {User} = require('../utils/auth');

router.get("/", async (req, res)=> {
    res.render("hompage")
});

router.get("/login", async (req, res) => {
    if(req.session.logged_in){
        return res.redirect("/vote")
        // create vote page and route
    }
    res.render("/login")
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


module.exports = router;