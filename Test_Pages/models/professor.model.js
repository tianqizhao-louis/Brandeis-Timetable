"use strict"

// connect with mongodb
const mongoose = require('mongoose');

// creating schema
var professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
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

/*

// Custom validation for email
professorSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
*/

// model function
mongoose.model('professor_Sch', professorSchema, "professor");
