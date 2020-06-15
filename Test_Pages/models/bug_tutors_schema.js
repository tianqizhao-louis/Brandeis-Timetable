"use strict"

// connect with mongoose database
const mongoose = require("mongoose"),
  bug_tutors_schema = mongoose.Schema({
    bug_tutors_id:Number,
    courses:[Number],
    email:[String],
    schedule:[String:[Number:Boolean]]// Monday: 9 : True
  });


module.exports = mongoose.model("bug_tutors", bug_tutors_schema); // export the function
