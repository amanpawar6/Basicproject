var express = require('express');
var router = express.Router();
var deletemodule=require("../module/deleteApi")

router.get('/delete',deletemodule.deleteApi);

function squaredResponse(req, res, next){
  let ip = req.params.number?req.params.number:req.body.number?req.body.number:req.query.number;
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
var registration=require("../module/registrations");


router.post('/signup',registration.userExists,registration.validatingDetails,registration.registerUser);
var employ=require("../module/updateuser")


router.put('/update/:id', employ.updateprofile);

var user=require('../module/login')

router.get('/login',user.loginUser);
var mail=require('../module/mail');

router.post('/mail',mail.email);

module.exports = router;
