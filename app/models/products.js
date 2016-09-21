'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('products', productSchema);