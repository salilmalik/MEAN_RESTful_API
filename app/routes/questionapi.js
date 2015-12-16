var Question = require('../models/Question');
var config = require('../../config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
logger = require('../logger/logger.js');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.post('/', function(req, res) {
		logger.debug('questionapi apiRouter /post started');
		var question = new Question();
		question.number = req.body.number;
		question.quest = req.body.quest;
		question.answer = req.body.answer;
		question.category=req.body.category;
		question.save(function(err, objectToInsert) {
			if (err) {
				console.log(err);
				return res.json({
					success : false,
					message : 'question not saved. ',
					returnCode : '1'
				});
			}
			var objectId = objectToInsert._id;
			res.json({
				success : true,
				message : 'question saved. ',
				returnCode : '2',
				objectId : objectId
			});
		});
		logger.debug('questionapi apiRouter /post ended');

	}).get('/:categoryType', function(req, res) {
		logger.debug('questionapi apiRouter /get started');
		console.log(JSON.stringify('req.params'+req.params));
		console.log(req.params.categoryType);
			    Question.find({
	        "category": req.params.categoryType
	    }, function (err, questions) {
	        if (err)
	            res.send(err);
	        if (!questions) {
				console.log('ERROR');
	            res.json({
	                success: false,
	                message: 'No questions for this category. ',
	                returnCode: '1'
	            });
	        }
	        if (questions) {
				console.log(questions);
	            res.json(questions);
	        }
	    });

	});

	return apiRouter;
};