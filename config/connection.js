var mysql = require("mysql");

// Set up MySQL connection.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "7jlmkkAe!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM.
module.exports = connection;
