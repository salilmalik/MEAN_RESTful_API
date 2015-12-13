var mongoose = require('mongoose');
var Schema = mongoose.Schema;
logger = require( '../logger/logger.js' );

var QuestionSchema = new Schema({
	number: Number,
	question : String,
	answer : String
});
module.exports = mongoose.model('Question', QuestionSchema);