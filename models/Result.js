'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var resultSchema = Schema( {
    resultId: Number,
    grid: Number,
    position: Number,
    driverRef: String,
    name: String,
    year: Number,ß
    constructorRef: String,
} );
module.exports = mongoose.model( 'Result', resultSchema );


