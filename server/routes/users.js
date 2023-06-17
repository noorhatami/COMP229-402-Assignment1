
//COMP229-402-Assignment1
//Noorahmad Hatami
//300847575
//06-03-2023
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
