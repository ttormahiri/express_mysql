var express = require('express');
var router = express.Router();
var tr = require('transliteration');
var cheinse=tr('你好，世界');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

});



module.exports = router;
