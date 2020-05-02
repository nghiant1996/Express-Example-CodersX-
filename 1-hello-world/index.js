var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');//lowbd co nhieu adapte
var adapter = new FileSync('db.json');
var shortid = require('shortid');



db = low(adapter);

var port = 3000;

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function(request, response) {
	response.render('index', {
		name: 'Nghia NT'
	});
}); 

app.get('/users/search', function(req,res) {
	var q = req.query.q;
	var users = db.get('users').value();
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index', {
		users: matchedUsers
	})
});

app.get('/users', function (req, res) {

	res.render('users/index', {
		users: db.get('users').value()
	})
	// console.log(db.get('users'))
});

app.get('/users/create', function(req,res) {
	res.render('users/create')
});

app.get('/users/:id', function(req, res) {
	var id = req.params.id ;
	var user = db.get('users').find({id: id}).value();

	res.render('users/view', {
		user: user
	});
})

app.post('/users/create', function(req,res) {
	req.body.id = shortid.generate();

	db.get('users').push(req.body).write();
	res.redirect('/users');
	
})

app.listen(port, function() {
	console.log('Serve listening on port ' + port);
});









