// var db = require('../db.js')// Co 2 dau cham tuc la db nam n

var express = require('express');

var router = express.Router();
var controller = require('../controllers/user.controller.js');
var validate = require('../validates/user.validate.js')
var authMiddleware = require('../middlewares/auth.middleware.js');


// function middleware1(req, res, next){
// 	console.log('middleware1');
// 	res.send('End 1')
// 	next();
// }

// function middleware2(req, res, next){
// 	res.send('Hello')
// }

// router.get('/test', middleware1, middleware2)


// router.get('/cookie', function(req, res, next){
// 	res.cookie('user-id', 12345);
// 	res.send('hello')
// })

router.get('/', controller.index); 

router.get('/search', controller.search);


router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);
module.exports = router

