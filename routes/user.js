var express = require('express');
var router = express.Router();
var Product = require('../models/product');
let csrf = require('csurf');
var passport = require('passport');
var middleware = require('../config/middleware');
let csrfProtection = csrf();

router.use(csrfProtection);

/*User Routes*/
router.get('/signin', function(req, res, next){
    var errors = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), errors: errors});
});

// process the login form
router.post('/signin', passport.authenticate('local-login', {
    successRedirect : '/user/profile', // redirect to the secure profile section
    failureRedirect : '/user/signin', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


router.get('/signup', function(req, res, next){
    var errors = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), errors: errors});
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/profile', middleware.isAuthenticated, function(req, res, next){
    res.render('user/profile');
});

router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/user/signin');
});



module.exports = router;