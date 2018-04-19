var express = require('express');
var router = express.Router();
var userFunc = require('../function/userFunc');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
    
  if(userFunc.add(req, res, next)) {
    res.render('/');
  }
})

module.exports = router;
