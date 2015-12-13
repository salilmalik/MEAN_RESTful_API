var Category = require('../models/Category');
var config = require('../../config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
logger = require('../logger/logger.js');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.post('/', function(req, res) {
		logger.debug('categoryapi apiRouter /post started');
		console.log(" req.body.type" + req.body.type);
		var category = new Category();
		category.type = req.body.type;
		category.save(function(err, objectToInsert) {
			if (err) {
				console.log(err);
				return res.json({
					success : false,
					message : 'Category not saved. ',
					returnCode : '1'
				});
			}
			var objectId = objectToInsert._id;
			res.json({
				success : true,
				message : 'Category saved. ',
				returnCode : '2',
				objectId : objectId
			});
		});
		logger.debug('categoryapi apiRouter /post ended');

	}).get('/', function(req, res) {
		logger.debug('categoryapi apiRouter /get started');
		Category.find({}, function(err, categories) {
			if (err) {
				console.log(err);
				return res.json({
					success : false,
					message : 'Category not saved. ',
					returnCode : '1'
				});
			}
			return res.json(categories);
		});
		logger.debug('categoryapi apiRouter /get ended');

	});

	return apiRouter;
};