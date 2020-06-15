"use strict"

// connect with mongodb
const mongoose = require('mongoose');

// creating schema
var professorSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email:{
    type: String
  },
  course:{
    type: [Number]
  },
  prof_id:{
    type: Number
  },
  schedule:{
    type:String
  }
});


// model function
mongoose.model('professor_Sch', professorSchema);
