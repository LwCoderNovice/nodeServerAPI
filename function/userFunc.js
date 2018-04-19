var sql = require('mysql');
var parser = require('body-parser');
var db = require('../config/config');
var connection = sql.createConnection(db.mysql);
module.exports = {
    add: (req, res, next) => {
        var form = req.body;
        connection.connect();
        connection.query('INSERT INTO user(username, password) VALUES("'+ form.username +'", "'+form.password+'")', function (error, results, fields) {
            if (error) throw error;
            if(results !== null && results !=='') {
                return true;
            }
        });
        connection.end();
    }
}