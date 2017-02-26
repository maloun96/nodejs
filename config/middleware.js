
// route middleware to make sure a user is logged in


module.exports = {
    isAuthenticated: function(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated()){
            console.log('Auth');
            return next();
        }

        // if they aren't redirect them to the home page
        res.redirect('/user/signin');
    }
};
