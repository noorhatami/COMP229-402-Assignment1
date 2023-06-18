var express = require('express');
var router = express.Router();

let mongoose=require('mongoose');
let passport=require('passport');

//Create the User Model instance
let userModel = require('../modules/user');
let User= userModel.User; //alias


module.exports.displayHomePage=function(req, res, next) {
    res.render('index', { title: 'Home' ,displayName: req.user ? req.user.displayName: ''});
  };
  
  module.exports.displayAboutPage=function(req, res, next) {
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName: ''});
  };
  module.exports.displayProductsPage=function(req, res, next) {
    res.render('products', { title: 'Products' ,displayName: req.user ? req.user.displayName: ''});
  };
  module.exports.displayServicesPage=function(req, res, next) {
    res.render('services', { title: 'Services' ,displayName: req.user ? req.user.displayName: ''});
  };
  module.exports.displayContactPage=function(req, res, next) {
    res.render('contact', { title: 'Contact Me' ,displayName: req.user ? req.user.displayName: '' });
  };
  

  module.exports.displayLoginPage=function(req, res, next) {
    //check if the user is already logged in

    if(!req.user){
      res.render('auth/login',{
        title: 'Login',
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName: ''
      })
    }
    else{
      return res.redirect('/');
    }
    
  };

  module.exports.processLoginPage=(req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //server err?
        if(err)
        {
            return next(err);
        }
        // if there is a user login err?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server err?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/business-contacts');
        });
    })(req, res, next);
};

  module.exports.displayRegisterPage=function(req, res, next) {
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: "Register",
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
   
  };

  module.exports.processRegisterPage=async (req, res, next) => {
    try
    {
        const existingUser = await User.findOne(
            { 
                email: req.body.email 
            });

        // If a user with email already exists, return an error
        if (existingUser) 
        {
            req.flash(
                'registerMessage', 
                'Registration Error: Email already in use!');

            return res.render('auth/register', 
            {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displaName : ''
            });
        }
        else 
        {
            // instantiate an user object
            let newUser = new User({
                username: req.body.username,
                email: req.body.email,
                displayName: req.body.displayName
            });

            User.register(newUser, req.body.password, (err) => {
                if(err)
                {
                    console.log(err);
                    console.log("Error: Inserting New User");
                    if(err.name == "UserExistsError")
                    {
                        req.flash(
                            'registerMessage',
                            'Registation Error: User Already Exists!'
                        );
                        console.log('Error: User Already Exists!');
                    }
                    return res.render('auth/register',
                    {
                        title: "Register",
                        messages: req.flash('registerMessage'),
                        displayName: req.user ? req.user.displayName : ''
                    });
                }
                else
                {
                    // if registration is successful
                    return passport.authenticate('local')(req, res, () => {
                        res.redirect('/business-contacts')
                    });
                }
            });
        }
    }
    catch (err) 
    {
        console.log(err);
        return next(err);
    }
};

module.exports.performLogout = (req, res, next) => {
  req.logout((err) => {
      if (err) {
          //handle error here
          console.log(err);
          return next(err);
      }
      return res.redirect('/');
  });
}