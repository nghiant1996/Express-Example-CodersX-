module.exports.index = function(req,res){
	
	var page = parseInt(req.query.page) || 1

	var perpage = 8;
	// var start = (page-1)*perpage;
	// var end = page*perpage;

	var drop = (page - 1) * perpage;


	var results = {};
	results.result = db.get('products').drop(drop).take(perpage);

	results.previous = {
		page: page - 1
	}

	results.next = {
		page: page + 1
	}


	results.numberPages = [ results.previous.page + 1, results.previous.page + 2, results.previous.page +3]
	

	res.render('product/product.pug', {
		// products: db.get('products').value().slice(start,end)
		products: results.result.value(),
		pre: results.previous.page,
		next: results.next.page,
		numberPages: results.numberPages
		
	})	
}