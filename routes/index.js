var express = require('express');
var router = express.Router();
var user=require('../modules/login')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',user.loginUser);
module.exports = router;
