// var db = require('../db.js')// Co 2 dau cham tuc la db nam n

var express = require('express');

var router = express.Router();
var controller = require('../controllers/user.controller.js');


router.get('/', controller.index); 

router.get('/search', controller.search);


router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', controller.postCreate);
module.exports = router

