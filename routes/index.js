var express = require('express');
var router = express.Router();
var Product = require('../models/product');



/* GET home page. */
/*Get a home page view*/
router.get('/', function (req, res, next) {
    Product.find( function ( err, prod, count ){
        res.render('index', {title: 'Todos', products: prod});
    });
});


/*Get all products to React Component Services*/
router.post('/', function (req, res, next) {
    Product.find( function ( err, prod, count ){
        res.json(prod);
    });
});

module.exports = router;
