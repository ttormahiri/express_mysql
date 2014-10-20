var express = require('express');
var router = express.Router();
var tr = require('transliteration');
var chine=tr('你好，世界');
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
connection.query('use uyghur2014')
/* GET home page. */
router.get('/', function(req, res) {
	 connection.query('SELECT * FROM uyghur limit 0,3', function(err, rows){
    res.render('hello', {users : rows});
  });
  


});



module.exports = router;
