var express = require('express');
var mongoose = require('mongoose');
var app = express();

// STARTED ON BUT NOT TESTED
mongoose.connect('connection-string-goes-here', function(){
	console.log('connected to mongo!');
})


app.listen(3000, function(){
	console.log('server running.')
})