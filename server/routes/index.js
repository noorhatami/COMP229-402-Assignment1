
//COMP229-402-Assignment1
//Noorahmad Hatami
//300847575
//06-03-2023
var express = require('express');
var router = express.Router();

let indexController=require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);
/* GET products page. */
router.get('/products', indexController.displayProductsPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);
/* GET hcontact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Business Contacts page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business Contacts' });
});

// Get Route for displaying the login page
router.get('/login', indexController.displayLoginPage);

// Post Route for processing the login page
router.post('/login', indexController.processLoginPage);

// Get Route for displaying the register page
router.get('/register', indexController.displayRegisterPage);

// Post Route for processing the register page
router.post('/register', indexController.processRegisterPage);

// Get route for performing UserLogout
router.get('/logout', indexController.performLogout);


module.exports = router;
