// router

"use strict"


const express = require('express');

// create a router
var router = express.Router();

router.get('/', (req, res) => {
  res.render("prof/addOrEdit", {
    viewTitle: "Insert Professor"
  });
});


module.exports = router;
