var express = require('express');
var router = express.Router();
var employ=require("../module/updateuser")


router.put('/update', employ.updateprofile);

module.exports = router;
