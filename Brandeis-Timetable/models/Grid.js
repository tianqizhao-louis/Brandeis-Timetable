'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gridSchema = Schema( {
  department: String,
  professor: String,
  courseID: String,
  tas: [{name: String, hours:String}],
  bugs: String
});

module.exports = mongoose.model('Grid', gridSchema);
