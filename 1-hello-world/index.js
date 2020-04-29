var express = require('express');
var app = express();

var port = 3000;

var users = [
 	{id: 1, name: 'Nghia'},
	{id: 2, name: 'Cuong'},
];

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(request, response) {
	response.render('index', {
		name: 'Nghia NT'
	});
}); 

app.get('/users/search', function(req,res) {
	var q = req.query.q;
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index', {
		users: matchedUsers
	})
});

app.get('/users', function (req, res) {

	res.render('users/index', {
		users: users
	})
});


app.listen(port, function() {
	console.log('Serve listening on port ' + port);
});






