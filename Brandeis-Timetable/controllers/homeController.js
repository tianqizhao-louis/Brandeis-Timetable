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

var database = [
  {
    Department: "Anthroplogy",
    Professor: "Srgt. Johnson",
    Course: "Anth99",
    TAs: ["Michelle Obama", "Harrison Ford", "Rachel Carson"],
    Bugs: ["Cortana", "Shulem Shtisel"]
  },
  {
    Department: "Anthroplogy",
    Professor: "Master Chief",
    Course: "Anth126",
    TAs: ["John Stewart", "Harrison Ford", "Whoopie Goldeberg"],
    Bugs: ["Cortana", "Big Bird"]
  },
  {
    Department: "COSI",
    Professor: "Geroge Lopez",
    Course: "Cosi101",
    TAs: ["Stan Marsh", "Randy Marsh"],
    Bugs: []
  }
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses,
    date : new Date(),
    owner: "Tim Hickey"
  });
};

exports.showBio = (req, res) => {
  res.render("bio");
}

exports.showSignUp = (req, res) => {
  res.render("contact", {
    date: new Date(),
  });
};
exports.showgridEditor = (req, res) => {
  res.render("gridEditor");
};

exports.postedSignUpForm = (req, res) => {
  let formData = req.body
  res.render("thanks",{formData:formData});
};

exports.showAbout = (req, res) => {
  res.render("about");
};

exports.showAndrew = (req,res) => {
  res.render("andrew");
};

exports.showJulian = (req,res) => {
  res.render("julian");
}
exports.showTestProf = (req,res) => {
  res.render("test_prof_profile");
}
exports.showTestSchedule = (req,res) => {
  res.render("test_class_schedule");
}

exports.showProfile = (req, res) => {
  res.render("profile");
}

exports.showSchedule = (req, res) =>{
  res.render("professor_profile_schedule");
}
