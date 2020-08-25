var express = require('express');
var router = express.Router();
var mail=require('../module/mail');

router.post('/mail',mail.email);

module.exports = router;
