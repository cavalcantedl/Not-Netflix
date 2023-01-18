var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET profiles page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});


module.exports = router;
