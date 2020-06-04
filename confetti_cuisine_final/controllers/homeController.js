"use strict";

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses,
    date : new Date(),
    owner: "Tim Hickey"
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact", {
    date: new Date(),
  });
};

exports.postedSignUpForm = (req, res) => {
  let formData = req.body
  res.render("thanks",{formData:formData});
};

exports.showAbout = (req, res) => {
  res.render("about");
};

exports.showAndrew = (req,res) => {
  res.render("Andrew");
};
