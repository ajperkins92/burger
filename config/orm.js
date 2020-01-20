// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";
    connection.query(dbQuery, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var dbQuery = "INSERT INTO " + table;

    dbQuery += " (";
    dbQuery += cols.toString();
    dbQuery += ") ";
    dbQuery += "VALUES (";
    dbQuery += printQuestionMarks(vals.length);
    dbQuery += ") ";

    console.log(dbQuery);

    connection.query(dbQuery, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (table, objColVals, condition, cb) {
    var dbQuery = "UPDATE " + table;

    dbQuery += " SET ";
    dbQuery += objToSql(objColVals);
    dbQuery += " WHERE ";
    dbQuery += condition;

    console.log(dbQuery);
    connection.query(dbQuery, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  deleteOne: function (table, condition, cb) {
    var dbQuery = "DELETE FROM " + table;
    dbQuery += " WHERE ";
    dbQuery += condition;

    connection.query(dbQuery, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
