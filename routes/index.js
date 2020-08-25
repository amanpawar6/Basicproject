var express = require('express');
var router = express.Router();
var deletemodule=require("../module/deleteApi")

router.get('/delete',deletemodule.deleteApi);

module.exports = router;
