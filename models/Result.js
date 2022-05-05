'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var resultSchema = Schema( {
    resultId: Number,
    grid: Number,
    position: Mixed,
    driverRef: String,
    name: String,
    year: Number,
    constructorRef: String,
} );
module.exports = mongoose.model( 'Result', resultSchema );


