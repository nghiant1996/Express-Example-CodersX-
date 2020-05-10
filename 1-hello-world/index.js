var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var port = 3000;
var app = express(); 

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(request, response) {
	response.render('index', {
		name: 'Nghia NT'
	});
}); 

app.use('/users', userRoute);  

app.listen(port, function() {
	console.log('Serve listening on port ' + port);
});









