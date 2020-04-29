var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(request, response) {
	response.render('index', {
		name: 'Nghia NT'
	});
});

app.get('/users', function (req, res) {
	res.render('users/index', {
		users: [
			{id: 1, name: 'Nghia'},
			{id: 2, name: 'Cuong'},
		]
	})
})


app.listen(port, function() {
	console.log('Serve listening on port ' + port);
});






