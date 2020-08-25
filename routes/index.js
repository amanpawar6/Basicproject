var express = require('express');
var router = express.Router();
var deletemodule=require("../module/deleteApi");
const uploader = require('../module/uploadImage');
var registration=require("../module/registrations");
var employ=require("../module/updateuser");
var mail=require('../module/mail');
var user=require('../module/login');


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

router.post('/signup',registration.userExists,registration.validatingDetails,registration.registerUser);

router.put('/update/:id', employ.updateprofile);

router.get('/login',user.loginUser);

router.post('/mail',mail.email);

router.post('/upload', uploader.upload, uploader.imageUpload); 

module.exports = router;
