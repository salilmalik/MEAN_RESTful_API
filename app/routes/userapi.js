var User = require('../models/User');
var config = require('../../config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
logger = require('../logger/logger.js');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.post('/', function(req, res) {
		logger.debug('userapi apiRouter /post started');
		var user = new User();
		user.name = req.body.name;
		user.email = req.body.email;
		user.imageURL = req.body.imageURL;
		;
		user.save(function(err, objectToInsert) {
			if (err) {
				console.log(err);
				return res.json({
					success : false,
					message : 'user not saved. ',
					returnCode : '1'
				});
			}
			var objectId = objectToInsert._id;
			res.json({
				success : true,
				message : 'user saved. ',
				returnCode : '2',
				objectId : objectId
			});
		});
		logger.debug('userapi apiRouter /post ended');

	}).get('/:user_id', function(req, res) {
		logger.debug('userapi apiRouter /get started');
		console.log(JSON.stringify('req.params' + req.params));
		console.log(req.params.user_id);
		User.findById(req.params.user_id, function(err, user) {
			if (err)
				res.send(err);
			if (!user) {
				console.log('ERROR');
				res.json({
					success : false,
					message : 'No user found. ',
					returnCode : '1'
				});
			}
			if (user) {
				console.log(user);
				res.json(user);
			}
		});
		logger.debug('userapi apiRouter /get started')
	});

	return apiRouter;
};