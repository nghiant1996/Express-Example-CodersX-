var shortid = require('shortid');
var db = require('../db');

module.exports = function(req,res,next) {
	if (!req.signedCookies.sessionId){

		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
			signed: true
		});

		db.get('sessions').push({
			id: sessionId
		})
		.write()
	}

	var currentSession = db.get('sessions').find({id: req.signedCookies.sessionId}).value();
	var cartCount = 0;
	var selectedProducts = currentSession.cart;

	for(var product in selectedProducts){
		cartCount += selectedProducts[product];
	}

	res.locals.cartCount = cartCount;

	next();
}