var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burgerName, function (result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/update/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    console.log(result);
    res.json("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
