"use strict"

// introduce express, router, mongoose, professor schema
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var professor = mongoose.model('professor_Sch');


// get the page
router.get('/', (req, res) => {
    res.render("professor/addOrEdit", {
        viewTitle: "Insert Professor"
    });
});



// post info
router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


// insert a new record into the database
function insertRecord(req, res) {
    var prof = new professor();


    // setting up parameters
    prof.name = req.body.name;
    prof.email = req.body.email;
    prof.course = req.body.course;
    prof.prof_id = req.body.prof_id;
    prof.schedule = req.body.schedule;
    prof.markModified('course');

    // save to the database
    prof.save((err, doc) => {
        if (!err)
            res.redirect('professor/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("professor/addOrEdit", {
                    viewTitle: "Insert Professor",
                    prof: req.body
                });
            }
            else{
              if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("professor/addOrEdit", {
                    viewTitle: "Insert Professor",
                    prof: req.body
                });
              }else{
                console.log('Error during record insertion : ' + err);
              }
            }
        }
    });
}



router.get('/list', (req, res) => {
    professor.find((err, docs) =>{
       if(!err){
         res.render("professor/list", {
           list: docs
         });
       }else{
         console.log('Error in retrieving employee list:' + err);
       }
    });
});




// handle validation error
function handleValidationError(err, body) {
    for (const field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}


function updateRecord(req, res){
  professor.findOneAndUpdate({_id: req.body._id}, req.body, {new : true}, (err, doc) =>{
    if(!err){
      res.redirect('professor/list');
    }else{
      if (err.name == 'ValidationError'){
        handleValidationError(err,req.body);
        res.render("professor/addOrEdit", {
          viewTitle: 'Update Professor',
          professor: req.body
        });
      }else{
        console.log('Error during record update: ' + err);
      }
    }
  })
}




router.get('/:id', (req, res) => {
  professor.findById(req.params.id, (err, doc) =>{
    if(!err){
      res.render("professor/addOrEdit", {
        viewTitle:"Update Professor",
        prof: doc
      });

    }
  });
});


router.get('/delete/:id', (req, res) => {
  professor.findByIdAndRemove(req.params.id, (err, doc) => {
    if(!err){
      res.redirect('/professor/list');
    }else{
      console.log('Error in professor delete: ' + err);
    }
  });
});






module.exports = router;
