let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');

//connect to our Contact Model
let Contacts=require('../modules/contacts');
let contactController=require('../controllers/contacts');


//Get Route for the Contacts List page - READ operation

router.get('/', contactController.displayContactList);

//Get Route for displaying the Add Page - CREATE Operation
router.get('/add',contactController.displayAddPage);
//Post Route for processing the Add Page- CREATE operation
router.post('/add',contactController.processAddPage);
//Get Route for displaying the Edit Page- UPDATE Operation
router.get('/edit/:id',contactController.displayEditPage);
//Post Route for processing the Edit Page- UPDATE Operation
router.post('/edit/:id',contactController.processEditPage);
// Get to perform deletion - DELETE Operation
router.get('/delete/:id',contactController.performDeletion);
module.exports=router;