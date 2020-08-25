var express = require('express');
var router = express.Router();
var registration=require("../module/registrations");


router.post('/signup',registration.userExists,registration.validatingDetails,registration.registerUser);

module.exports = router;
