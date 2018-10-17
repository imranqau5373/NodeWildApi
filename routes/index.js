var express = require('express');
var router = express.Router();
//var path    = require("../views");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/newIndex', { title: 'Express' });
  //res.sendFile(path.join(__dirname + '../views/newIndex.html'));
});

module.exports = router;
