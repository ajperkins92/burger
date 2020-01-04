// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  create: function (name, cb) {
    orm.create("burgers", ["burgerName", "devoured"], [name, false], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    },
      condition, cb);
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
