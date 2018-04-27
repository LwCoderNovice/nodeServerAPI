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
// CHECK USER NAME
router.post('/checkUsername', (req, res, next) => {
  const username = req.body;
  const sqlString = sqlMethod.Select('user', 'username', username.username);
  connection.query(sqlString, (error, results, fields) => {
      if (error) throw error;
      if(results.length > 0) {
        res.json({result: 'NO'});
      }else {
        res.json({result: 'YES'});
      }
  });
});
// REGISTER USER
router.post('/register', (req, res, next) => {
  const form = req.body;
  const sqlString = sqlMethod.Insert('user', ['username', 'password'], ['"'+form.username+'"', '"'+form.password+'"']);
  connection.query(sqlString, (error, results, fields) => {
      if (error) throw error;
      if(results !== null && results !=='') {
          res.json({result: 'OK'});
      }
  });
});

// LOGIN
router.post('/login', (req, res, next) => {
  // TODO: handle session
  const form = req.body;
  const where = `username ='${form.username}' and password = '${form.password}'`
  const sql = sqlMethod.ValidateUser('user', where);
  console.log(sql);
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    if(results.length > 0) {
      res.json({result: 'SUCCESS'});
    }else {
      res.json({result: 'FAILD'});
    }
  });
});

module.exports = router;
