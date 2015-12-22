var mongoose = require('mongoose');
var Schema = mongoose.Schema;
logger = require( '../logger/logger.js' );

// user schema
var UserSchema = new Schema({
	name : String,
	email : String,
	imageURL : String
});


module.exports = mongoose.model('User', UserSchema);