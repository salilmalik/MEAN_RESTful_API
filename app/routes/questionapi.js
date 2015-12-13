var Question = require('../models/Question');
var config = require('../../config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
logger = require('../logger/logger.js');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.post('/', function(req, res) {
		logger.debug('questionapi apiRouter /post started');

		logger.debug('questionapi apiRouter /post ended');

	}).get('/', function(req, res) {
		logger.debug('questionapi apiRouter /get started');

		logger.debug('questionapi apiRouter /get ended');

	});

	return apiRouter;
};