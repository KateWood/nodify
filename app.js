var express = require('express');
var mongoose = require('mongoose');
var app = express();

// STARTED ON BUT NOT TESTED
mongoose.connect('connection-string-haha', function(){
	console.log('connected to mongo!');
})

app.use(stuff)

app.listen(3000, function(){
	console.log('server running.')
})
