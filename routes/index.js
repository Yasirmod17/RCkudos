var express = require('express');
var router = express.Router();
const ACCESS_TOKEN = "40b3c46062a00134d08b00bb878e245d"
var API = require('groupme').Stateless

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/postKudos', function(req,res){
	console.log(req.body.content);
	API.Bots.post(ACCESS_TOKEN, "97a473b7af05ef3f1a79e16157", req.body.content, {}, function(err,ret) {
  		if (!err) {
   			 console.log(ret);        
  		}
  		res.send("Kudos to you for your Kudos!")
	});
});

module.exports = router;
