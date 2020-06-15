"use strict"

// connect with mongoose database
const mongoose = require("mongoose"),
  professor_schema = mongoose.Schema({
    name: String,
    email: String,
    courses: [Number], // course ids
    prof_id: Number, // an unique id
    schedule:[String:[Number:Boolean]]// Monday: 9 : True
  });


module.exports = mongoose.model("professor", professor_schema); // export the function
