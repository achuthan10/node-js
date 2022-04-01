const mysql = require("mysql2");
const config = require("./config");

const Sequelize = require("sequelize");

const sequalizeCon = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

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

module.exports = { connection, sequalizeCon };
