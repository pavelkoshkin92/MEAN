'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({

    rate: String,
    text: String,
    created_by:{
        id_user: String,
        username: String,
    },
    id_entry: String

});

module.exports = mongoose.model('reviews', reviewSchema);