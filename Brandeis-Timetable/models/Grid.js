'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gridSchema = Schema( {
  //department: String,
  //prof_name: String,
  //prof_hours: String,
  //prof_office: String,
  //courseid: String,
  //tas: [{ta_name: String, ta_hours: String}],
  //bugs: [{bugs_name: String, bugs_hous: String}]
  a: String,
  b: String
});

module.exports = mongoose.model('Grid', gridSchema);
