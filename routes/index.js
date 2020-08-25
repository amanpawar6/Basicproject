var express = require('express');
var router = express.Router();
const uploader = require('../module/uploadImage')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', uploader.upload, uploader.imageUpload); 

module.exports = router;
