var express = require('express');
var path = require('path');
var mysql = require('mysql');

var router = express.Router();

// var db = mysql.createPool({
var db = mysql.createConnection({
    connectionLimit: 5,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b4a8e285a022ee',
    password: '2c726724',
    database: 'heroku_4ea95ec74a86030'
  }); 
  
db.connect((err) => {
    if (err) {
        console.log("Connection error");
        throw err;
    }
    else {
        console.log('MySQL Connected');
    }
});

// db.getConnection((err, connection) => {
    
// });

router.get('/sql', function(req, res) {
    var q = 'select * from testtable';
    db.query(q, (err, result) => {
        if (err) {
            console.log("Query returned error");
            throw err;
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

module.exports = router;

