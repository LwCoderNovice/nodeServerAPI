var express = require('express');
var router = express.Router();
var userFunc = require('../function/userFunc');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  userFunc.add(req, res, next);
})

module.exports = router;
