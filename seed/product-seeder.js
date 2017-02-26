var Product = require('../models/product');
var mongoose = require('mongoose');


//Connect to DB
mongoose.connect('localhost:27017/mydb');


var products = [
    new Product({
        imagePath: '123',
        title: '123',
        description: '123',
        price: '12'
    }),
    new Product({
        imagePath: '122',
        title: '122',
        description: '122',
        price: '1'
    })
];


var gone = 0;
for(var i = 1; i < products.length; i++){
    gone++;
    products[i].save(function (err, result) {
        if(gone === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}