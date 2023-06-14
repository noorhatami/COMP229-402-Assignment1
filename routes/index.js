
//COMP229-402-Assignment1
//Noorahmad Hatami
//300847575
//06-03-2023
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});
/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET hcontact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET Business Contacts page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business Contacts' });
});


module.exports = router;
