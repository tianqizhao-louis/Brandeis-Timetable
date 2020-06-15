"use strict"

// connect with mongoose database
const mongoose = require("mongoose"),
  professor_schema = mongoose.Schema({
    name: String,
    email: String,
    courses: [Number], // course ids
    prof_id: Number, // an unique id
    schedule:{
      Monday : {
        9 : Boolean,
        10 : Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean
      },
      Tuesday: {
        9 : Boolean,
        10 : Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean
      },
      Wednesday: {
        9 : Boolean,
        10 : Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean
      },
      Thursday: {
        9 : Boolean,
        10 : Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean
      },
      Friday: {
        9 : Boolean,
        10 : Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean
      }
    }
    //[String:[Number:Boolean]]// Monday: 9 : True
  });


module.exports = mongoose.model("professor", professor_schema); // export the function
