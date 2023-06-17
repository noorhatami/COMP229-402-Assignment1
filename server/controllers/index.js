var express = require('express');
var router = express.Router();

module.exports.displayHomePage=function(req, res, next) {
    res.render('index', { title: 'Home'});
  };
  
  module.exports.displayAboutPage=function(req, res, next) {
    res.render('about', { title: 'About'});
  };
  module.exports.displayProductsPage=function(req, res, next) {
    res.render('products', { title: 'Products' });
  };
  module.exports.displayServicesPage=function(req, res, next) {
    res.render('services', { title: 'Services' });
  };
  module.exports.displayContactPage=function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
  };
  