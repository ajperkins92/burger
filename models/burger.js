// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"], [
      name, false
    ], cb);
  },

  update: function (id, cb) {
    var condtiion = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  },

  delete: function (condition, cb) {
    orm.all("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
