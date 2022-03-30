const mysql = require("mysql");
const config = require("./config");

let connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected");
});

module.exports = connection;
