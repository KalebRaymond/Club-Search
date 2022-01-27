const bodyParser = require('body-parser');
const config = require('./config');
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

/*
// Connect to MongoDB
console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
 console.error('MongoDB connection error: ' + err);
});
*/

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// Cross Origin middleware
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
	next();
})
 
require('./routes')(app);
 
app.listen(config.port, () => console.log(`Club Search server listening on ${config.port}`))

app.get('/clubs', function (req, res) {
	let clubs = JSON.parse(fs.readFileSync('clubs/mock-clubs.json', 'utf8'));
	res.json(clubs)
})