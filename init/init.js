const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const conf = require('../config/config');
const events = require('events');

router.get('/', (req, res, next) => {
    res.render('init');
})

router.post('/start', (req, res, next) => {
    const INIT_DB_FILE = path.join(__dirname, './init.sql');
    console.log('Read SQLFILE...');
    const content = fs.readFileSync(INIT_DB_FILE, 'utf8');
    console.log('Initialize the database...');
    const DB = require('knex')({
        client: 'mysql',
        connection: {
            host: conf.mysql.host,
            port: conf.mysql.port,
            user: conf.mysql.user,
            password: conf.mysql.pass,
            database: conf.mysql.database,
            charset: conf.mysql.char,
            multipleStatements: true
        }
    })
    let _initResult;
    DB.raw(content).then(result => {
        console.log('Database initialized successfully.')
        _initResult = 'Database initialized successfully.';
        res.json({result: _initResult});
    }, err => {
        _initResult = 'Database initialized faild';
        res.json({result: _initResult});
        throw new Error(err);
    })
})

module.exports = router;