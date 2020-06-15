"use strict"

// connect with mongoose database
const mongoose = require("mongoose"),
  professor_schema = mongoose.Schema({
    name: String,
    email: String,
    courses: [Number],
    prof_id: [Number],
    schedule:[String:[Number:Boolean]]// Monday: 9 : True
  });
