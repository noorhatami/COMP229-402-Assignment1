let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');

let passport = require('passport');

//connect to our Contact Model
let Contacts=require('../modules/contacts');
let contactController=require('../controllers/contacts');


function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


//Get Route for the Contacts List page - READ operation

router.get('/', contactController.displayContactList);

//Get Route for displaying the Add Page - CREATE Operation
router.get('/add',requireAuth, contactController.displayAddPage);
//Post Route for processing the Add Page- CREATE operation
router.post('/add',requireAuth,contactController.processAddPage);
//Get Route for displaying the Edit Page- UPDATE Operation
router.get('/edit/:id',requireAuth, contactController.displayEditPage);
//Post Route for processing the Edit Page- UPDATE Operation
router.post('/edit/:id',requireAuth, contactController.processEditPage);
// Get to perform deletion - DELETE Operation
router.get('/delete/:id', requireAuth,contactController.performDeletion);
module.exports=router;