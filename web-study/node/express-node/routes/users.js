var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/txt', function(req, res, next) {
  res.send('txt');
});

module.exports = router;
