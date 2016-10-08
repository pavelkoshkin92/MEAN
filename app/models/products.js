'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({

    title: String,
    image: String,
    text: {
        price:Number,
        category:String,
        cubic_capacity:Number,
        fuel:String,
        power:String,
        fuel_consumption:Number,
        gearbox:String,
        gearbox_q:Number,
        wheel_drive:String
    }
});

module.exports = mongoose.model('products', productSchema);