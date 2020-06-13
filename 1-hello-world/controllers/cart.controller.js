var db = require('../db')

module.exports.addToCart = function(req, res, next){
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId){
		res.redirect('/product');
		return;
	}

	var count = db.get('sessions')
	  			  .find({id: sessionId})
	  			  .get('cart.'+productId, 0) /*0 de neu khong co gia tri thi co gia tri tra ve mac dinh la 0*/
	  			  .value()

	db.get('sessions')
	  .find({id: sessionId})
	  .set('cart.' + productId, count + 1)
	  .write();

	var selectedProduct = db.get('sessions').find({id: sessionId}).value().cart;

	// var cartCount = 0;

	// for(product in selectedProduct){
	// 	cartCount += selectedProduct[product]
	// }

	// res.locals.countCart = cartCount;

	res.redirect('/product');
}
