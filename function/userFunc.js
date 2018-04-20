var sql = require('mysql');
var sqlMethod = require('../class/sql.class');
var parser = require('body-parser');
var db = require('../config/config');
var connection = sql.createConnection(db.mysql);
module.exports = {
    add: (req, res, next) => {
        var form = req.body;
        let sqlObject = new sqlMethod;
        var sqlString = sqlObject.Insert('user', ['username', 'password'], ['"'+form.username+'"', '"'+form.password+'"']);
        connection.connect();
        connection.query(sqlString, function (error, results, fields) {
            if (error) throw error;
            if(results !== null && results !=='') {
                return true;
            }
        });
        connection.end();
    }
}