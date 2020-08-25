var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function squaredResponse(req, res, next){
  let ip = req.params.number?req.params.number:req.body.number;
  let number = parseInt(ip);
  if(isNaN(number)){
    res.status(400).send("Not a number!");
  }
  else{
    res.status(200).send({squaredNumber:number*number});
  }
}

router.get('/square/:number', squaredResponse);
router.get('/square/', squaredResponse);

module.exports = router;
