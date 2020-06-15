"use strict"

// connect with mongoose database,
// name is time_schedule, it is a local database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/time_schedule",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
  // Above is used to avoid errors
);

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
