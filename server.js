'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var apiRoutes = express.Router();
var products = require('./app/models/products');
var users = require('./app/models/users');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/products');

app.use(express.static(__dirname + "/public/"));


fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
    if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename)
});

apiRoutes.get('/products', function(req, res){
    console.log("I received a GET request!");
    mongoose.model('products').find(function(err,products){
        res.send(products)
    })

});

apiRoutes.get("/products/:id", function(req, res) {
    mongoose.model('products').findOne({ _id: req.params.id }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get product");
        } else {
            res.status(200).json(doc);
        }
    });
});

apiRoutes.post('/register',function(req, res) {

});











app.use('/api', apiRoutes);
app.listen(3000);
console.log('Server running on port 3000');