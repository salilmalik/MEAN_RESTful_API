var mongoose = require('mongoose');
var Schema = mongoose.Schema;
logger = require( '../logger/logger.js' );

var CategorySchema = new Schema({
	type : String
});
module.exports = mongoose.model('Category', CategorySchema);