var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query', function(req, res, next) {
  res.send(JSON.stringify(req.query))
});

router.get('/param/:paramValue/other/:otherValue', function(req, res, next) {
  res.send(JSON.stringify(req.params))
});



module.exports = router;
