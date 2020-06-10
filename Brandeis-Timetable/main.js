"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect(
  'mongodb://localhost/Brandeis-Timetable',
  {useNewUrlParser:true})

const db = mongoose.connection;
db.on('error', ()=>console.log("connection error"))
db.once('open', ()=>console.log("We connected at " +new Date()))

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about",homeController.showAbout);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.get("/bio", homeController.showBio);
app.get("/andrew", homeController.showAndrew);
app.get("/julian",homeController.showJulian);
app.get("/test_prof_profile",homeController.showTestProf);
app.get("/test_class_schedule",homeController.showTestSchedule);
app.post("/contact", homeController.postedSignUpForm);

const Contact=require("./models/Contact")
app.get("/showContacts",
 async(req,res) => {
   try{
     res.locals.contacts = await Contact.find({})
     res.render('showContacts')
   }
   catch(e) {
     console.log("Error:"+e)
     console.dir(theError)
     res.send("There was an error in /showContacts!")
   }
 })

app.post('Contact',
  async(req,res) => {
    try {
      let name = req.body.name
      let email = req.body.email
      let message = req.body.message
      let newContact = new Contact({name:name, email:email, message:message})
      await newContact.save()
      res.redirect('/showContacts')
    }
    catch(e) {
      res.send("error in addContact")
    }
  });

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
