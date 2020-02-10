var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});


router.post("/burgers/create/", function (req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);
  burger.updateOne(
    { devoured: req.body.devoured }, condition, function (result) {
      if (result, changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200);
      }
    });
});

router.delete("burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);

  burger.deleteOne(condition, function (result) {
    if ((result, changedRows === 0)) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
