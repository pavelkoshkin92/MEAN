'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;

var app = express();
mongoose.connect('mongodb://localhost/products');

app.use(express.static(__dirname + "/public/"));

var apiRoutes = express.Router();

apiRoutes.get('/products', function(req, res){
    console.log("I received a GET request!");
    products.find(function(err,products){
        res.send(products)
    })

});

apiRoutes.get("/products/:id", function(req, res) {
    products.findOne({ _id: req.params.id }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get product");
        } else {
            res.status(200).json(doc);
        }
    });
});

apiRoutes.post('/register',function(req, res) {

});




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

var userSchema = new Schema({
    username: String,
    password: String
});

var products = mongoose.model('products', productSchema);
var users = mongoose.model('users', userSchema);


app.use('/api', apiRoutes);
app.listen(3000);
console.log('Server running on port 3000');