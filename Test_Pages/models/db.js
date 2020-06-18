"use strict";

// connect mongo database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scheduleDB', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,
useFindAndModify: false}
, (err) => {
  if(!err){
    console.log('mongodb connection succeeded.');
  }else{
    console.log('error in db connection: ' + err);
  }
});


//connect with model
require('./professor.model');
