var express = require('express');
var router = express.Router();
var user = require('../class/user.class');
const sql = require('mysql');
const sqlMethod = require('../class/sql.class');
const db = require('../config/config');
const connection = sql.createConnection(db.mysql);

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
  //  console.log(res.end(user.register(req, res, next)));
  // let result = user.register(req, res, next);
  //  if(result === 'OK') {
  //   console.log('success');
  //   res.end(result);
  //   // res.render('/');
  // }
  const form = req.body;
        const sqlString = sqlMethod.Insert('user', ['username', 'password'], ['"'+form.username+'"', '"'+form.password+'"']);
        connection.connect();
        connection.query(sqlString, (error, results, fields) => {
            if (error) throw error;
            if(results !== null && results !=='') {
                console.log('success:', results);
                res.send('OK');
            }
        });
        connection.end();
})

module.exports = router;
