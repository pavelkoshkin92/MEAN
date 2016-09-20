'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;

var app = express();

app.use(express.static(__dirname + "/public/"));
app.get('/products', function(req, res){
    console.log("I received a GET request!");
    products.find(function(err,products){
        res.send(products)
    })

});
// app.get('products/:productId', function(req, res){
//     products.findOne({
//         _id: req.params.productId
//
//     },
//     function(err, product){
//         res.send(product)
//     });
//     console.log('I received product-detail request');
//
// });
app.get("/products/:id", function(req, res) {
    products.findOne({ _id: req.params.id }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get product");
        } else {
            res.status(200).json(doc);
        }
    });
});




mongoose.connect('mongodb://localhost/products');
var productSchema = new Schema({

    title: String,
    image: String,
    text: {
        price:String,
        category:String,
        cubic_capacity:String,
        fuel:String,
        power:String,
        fuel_consumption:String,
        gearbox:String,
        gearbox_q:String,
        wheel_drive:String
    }
});
var products = mongoose.model('products', productSchema);
app.listen(3000);
console.log('Server running on port 3000');