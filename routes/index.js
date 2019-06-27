var express = require('express');
var client = require('../bin/client');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  client();
  res.render('index', { title: 'Express' });
});

module.exports = router;
