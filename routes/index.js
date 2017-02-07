var express = require('express');
var router = express.Router();
var Product = require('../models/product');
let csrf = require('csurf');
var passport = require('passport');
let csrfProtection = csrf();
var middleware = require('../config/middleware');

router.use(csrfProtection);


/* GET home page. */
/*Get a home page view*/
router.get('/', middleware.isAuthenticated, function (req, res, next) {
    console.log('TEst here');
    Product.find( function ( err, prod, count ){
        res.render('index', {title: 'Todos', products: prod});
    });
});


/*Get all products to React Component Services*/
router.post('/',  middleware.isAuthenticated, function (req, res, next) {
    console.log('123');
    Product.find( function ( err, prod, count ){
        res.json(prod);
    });
});






module.exports = router;
