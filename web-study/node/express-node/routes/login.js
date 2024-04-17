const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('../views/login.html');
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send('ok');
});

module.exports = router;
