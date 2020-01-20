// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (id, cb) {
    orm.selectAll("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  deleteOne: function (condition, cb) {
    orm.selectAll("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
