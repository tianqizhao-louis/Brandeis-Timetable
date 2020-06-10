'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gridSchema = Schema( {
  Department: String,
  Professor: String,
  CourseID: String,
  TAs: String,
  BUGS: String
});

module.exports = mongoose.model('Grid', gridSchema);
