const connection = require("./connection");

let orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (burgerName, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burgerName], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (burgerID, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = (?)";

    connection.query(queryString, [burgerID], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}

module.exports = orm;