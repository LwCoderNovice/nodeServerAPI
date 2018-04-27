const express = require('express');
const router = express.Router();
const sql = require('mysql');
const multer  = require('multer')
const sqlMethod = require('../class/sql.class');
const db = require('../config/config');
const connection = sql.createConnection(db.mysql);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        const _fileformat = file.mimetype.split('/')[1];
      cb(null, file.fieldname + Date.now() + `.${_fileformat}`);
    }
  });

const upload = multer({ storage: storage });

router.get('/', (req,res, next) => {
    res.send('Topic api root');
})

router.post('/publish', upload.array('img', 9), (req, res, next)=> {
    const _files = req.files;
    console.log(_files);
    let _imgUrl='';
    for( const val of _files) {
        _imgUrl += `${val.path.replace(/\\/, '/')},`;
    }
    console.log(_imgUrl);
    const _formbody = req.body;
    const _sql = sqlMethod.Insert('topic', ['content', 'author', 'creattime', 'imgurl', 'issticky'],[`"${_formbody.content}"`, `"${_formbody.author}"`, `"${_formbody.createtime}"`,`"${_imgUrl}"`, `"0"`]);
    connection.query(_sql, (error, results, fields) => {
        if(error) throw error;
        res.json({
            result: 'SUCCESS'
        });
    });
})
module.exports = router;