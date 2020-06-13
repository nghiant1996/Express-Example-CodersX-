require('dotenv').config()

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');


var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware')

var port = 3000;
var app = express(); 

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);


app.use(express.static('public'));

app.get('/', function(request, response) {
	console.log(request.cookies)
	response.render('index', {
		name: 'Nghia NT'
	});

}); 

app.use('/users', authMiddleware.requireAuth, userRoute);  
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);



app.listen(port, function() {
	console.log('Serve listening on port ' + port);
});









