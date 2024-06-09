const router = require('express').Router();
const {User} = require('../utils/auth');

router.get("/", async (req, res)=> {
    res.render("hompage")
});

router.get("/login", async (req, res) => {
    if(req.session.logged_in){
        return res.redirect("/vote")
        // create vote page and route
    }
    res.render("login")
})

module.exports = router;