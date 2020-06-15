"use strict"

// professor controller

const professor = require("../models/professor_schema");

// get all professors
exports.getAllProfessors = (req, res) => {
  professor.find({})
    .exec()
    .then(professors => {
      res.render("professors", {
        professors: professors
      });
    })
    .catch(error => {
      console.log(error.message);
      return [];
    })
    .then(() => {
      console.log("promise complete");
    });
};

exports.getProfessorPage = (req, res) => {
  res.render("index"); //TODO
};


exports.saveProfessor = (req, res) => {
  let newProfessor = new Professor({
    name: req.body.name,
    email: req.body.email,
    courses: req.body.courses,
    prof_id: req.body.prof_id,
    schedule: req.body.schedule
  });
  newSubscriber
    .save()
    .then(() => {
      res.render("thanks"); //TODO
    })
    .catch(error => {
      res.send(error);
    });
};
