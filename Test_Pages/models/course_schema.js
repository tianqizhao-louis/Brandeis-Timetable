"use strict"

// connect with mongoose database
const mongoose = require("mongoose"),
  course_schema = mongoose.Schema({
    course_id:Number, // a unique id
    bug_tutors_id:Number
  });


module.exports = mongoose.model("course", course_schema); // export the function
