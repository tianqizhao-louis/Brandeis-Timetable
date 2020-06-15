"use strict"


// connect with mongodb
require('./models/db');


// connect with express
const express = require('express');
var app = express();

// request path & express handle bars
const path = require('path');
const exphbs = require('express-handlebars');

// body parser request
const bodyparser = require('body-parser');


// controller config
const professorController = require('./controllers/professorController');


// config handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout',
layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


// use body parser
app.use(bodyparser.urlencoded({
  extended:true
}));
// to json
app.use(bodyparser.json());



//running
app.listen(3000, () => {
  console.log('express server started at port: 3000');
})



// use controllers
app.use('/professor', professorController);






/*

// connect with mongoose database,
// name is time_schedule, it is a local database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/time_schedule",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
  // Above is used to avoid errors
);

var assert = require('assert');

// inital express
const express = require("express"),
  app = express(),
  professorController = require("./controllers/professorController"),
  layouts = require("express-ejs-layouts");


app.get("/professor_schema", professorController.getAllProfessors,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});


// trigger
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
//app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

*/
