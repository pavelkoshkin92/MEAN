var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public/"));
app.get('/products', function(req, res){
    console.log("I received a GET request!");
    mongoose.model('products').find(function(err,products){
        res.send(products)
    })


});
mongoose.connect('mongodb://localhost/products');
var productSchema = new Schema({

    title: String,
    image: String,
    text: {
        _id:ObjectId,
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