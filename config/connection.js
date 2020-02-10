var mysql = require("mysql");

var connection;

// Configured to work with JAWSDB for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("MySQL connected as id " + connection.threadId);
});

module.exports = connection;
