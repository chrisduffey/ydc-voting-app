const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirectt('/login');
    }else {
        next();
    }
};

module.exports = withAuth;
