var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'sousuo'
}); 

/* GET home page. */
router.post('/search', function(req, res, next) {
	var idB=req.body.idA
connection.query('SELECT * FROM sousuoA WHERE name LIKE "%'+idB+'%" OR datai LIKE "%'+idB+'%"',function(err,rows){
	
  	res.header('Access-Control-Allow-Origin',"*")
  	console.log(rows)
  	
  	res.send(rows)
  })
  
});

module.exports = router;
