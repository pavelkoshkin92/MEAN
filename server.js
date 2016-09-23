'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jwt-simple');
// var fs = require('fs');
var app = express();
var apiRoutes = express.Router();
var products = require('./app/models/products');
var User = require('./app/models/user');
var reviews = require('./app/models/reviews');
var config = require('./config/database');
var Schema = mongoose.Schema;

mongoose.connect(config.database);
require('./config/passport')(passport);
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());


// fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
//     if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename)
// });

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

apiRoutes.post('/register', function(req, res) {
    if (!req.body.name || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password.'});
    } else {
        var newUser = new User({
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

apiRoutes.post('/login', function(req, res) {
    User.findOne({
        username: req.body.name
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findOne({
            username: decoded.username
        }, function(err, user) {
            if (err) throw err;

            if (!user) {
                return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                res.json({success: true, msg: 'Welcome ' + user.username + '!', usr: {usrname: user.username, usrid: user._id} });
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
});

apiRoutes.post('/reviews/:productId', function(req, res){
    if (!req.body.username) {
        res.json({success: false, msg: 'Please pass name.'});
    }
    else if (!req.body.text){
        res.json({success: false, msg: 'Please write the review.'})

    }
    else {
        var newReview = new reviews({
            id_entry: req.params.productId,
            created_by:{
                id_user: req.body.id_user,
                username: req.body.username,
            },
            rate: req.body.rate,
            text: req.body.text

        });
        // save the user
        newReview.save(function(err) {
            if (err) {
                return res.json({success: false, msg: err});
            }
            res.json({success: true});
        });
    }
});

var getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};




app.use('/api', apiRoutes);
app.listen(3000);
console.log('Server running on port 3000');