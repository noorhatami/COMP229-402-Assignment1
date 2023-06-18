let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');

//create a reference to the model
let Contacts=require('../modules/contacts');

module.exports.displayContactList=async(req,res,next)=>{
    try{
        let contactList=await Contacts.find();
        //console.log(contactList)

        res.render('contacts/list',{
            title: 'Business Contacts', 
            ContactList: contactList,
            displayName: req.user ? req.user.displayName : ''})
    } catch(err){
        console.error(err);
    }
};

module.exports.displayAddPage=async(req,res,next)=>{
    try{
        

        res.render('contacts/add',{title: 'Add Business Contacts', 
        displayName: req.user ? req.user.displayName : ''})
    } catch(err){
        console.error(err);
    }
};

module.exports.processAddPage=async(req,res,next)=>{
    let newContact= new  Contacts({
        "Name": req.body.Name,
        "Number": req.body.Number,
        "Email": req.body.Email
    });
    try{
        await newContact.save();
        res.redirect('/business-contacts');
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage=async(req,res,next)=>{
    let id=req.params.id;

    try{
        let contactToEdit = await Contacts.findById(id);
        res.render('contacts/edit', {title: 'Edit Contacts', 
        contact: contactToEdit , 
        displayName: req.user ? req.user.displayName : '' })
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
    
};

module.exports.processEditPage=async(req,res,next)=>{
    let id=req.params.id;

    let updatedContacts={
        "Name": req.body.Name,
        "Number": req.body.Number,
        "Email": req.body.Email
    };
    try{
        await Contacts.updateOne({_id: id},updatedContacts);
        res.redirect('/business-contacts');
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
    
};

module.exports.performDeletion=async(req,res,next)=>{
    let id=req.params.id;
    try{
        await Contacts.findByIdAndRemove(id);
        res.redirect('/business-contacts')

    }catch(err){
        console.log(err);
        res.status(500).send(err);

    }
};