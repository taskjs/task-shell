'use strict';

var assert = require('assert');
var Shell = require('../lib/shell');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Shell).run(
    [], // inputs
    {command: 'ls .'}, // options
    console // logger
).then(function(inputs){
    console.log(inputs)
}).catch(errorHandler)
