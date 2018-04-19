var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', // Address
  user     : 'root', // user
  password : '',
  database : 'geekDB' // databse name
});
 
connection.connect();
 
connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();