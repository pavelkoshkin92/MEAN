'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jwt-simple');
var fs = require('fs');
var app = express();
var apiRoutes = express.Router();
var products = require('./app/models/products');
var User = require('./app/models/user');
var config = require('./config/database');
var Schema = mongoose.Schema;

mongoose.connect(config.database);
require('./config/passport')(passport);
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());


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

apiRoutes.post('/register', function(req, res) {
    if (!req.body.name || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password.'});
    } else {
        var newUser = new mongoose.model('User')({
            username: req.body.name,
            password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});





app.use('/api', apiRoutes);
app.listen(3000);
console.log('Server running on port 3000');