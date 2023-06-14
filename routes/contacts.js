let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');

//connect to our Contact Model
let Contacts=require('../modules/contacts');

//Get Route for the Contacts List page

router.get('/',async(req,res,next)=>{
    try{
        let contactList=await Contacts.find();
        //console.log(contactList)

        res.render('business',{title: 'Business Contacts', ContactList: contactList})
    } catch(err){
        console.error(err);
    }
});

module.exports=router;