var express = require('express');
var router = express.Router();
var indexService = require('../service/index');

var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {

    indexService.getData().then(function(data){
        console.log(data.id);
        res.render('index', { title: data.name });
    });

});

module.exports = router;
