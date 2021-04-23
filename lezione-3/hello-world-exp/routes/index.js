var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', showMe : {show: true} });
});

router.get('/query', function(req, res, next) {
  res.json(req.query)
});

router.get('/param/:paramValue/other/:otherValue', function(req, res, next) {
  const {query, params} = req
  res.json({query, params})
  
});



module.exports = router;
