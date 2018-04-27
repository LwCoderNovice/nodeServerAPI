const sql = require('mysql');
const sqlMethod = require('./sql.class');
const db = require('../config/config');
const connection = sql.createConnection(db.mysql);
class User {
    constructor() {
    }

    static register(req, res, next) {
        let returnval;
        const form = req.body;
        const sqlString = sqlMethod.Insert('user', ['username', 'password'], ['"'+form.username+'"', '"'+form.password+'"']);
        connection.connect();
        connection.query(sqlString, function (error, results, fields) {
            if (error) throw error;
            if(results !== null && results !=='') {
                console.log('success:', results);
                res.send('OK');
            }
        });
        connection.end();
    }
}

module.exports = User;