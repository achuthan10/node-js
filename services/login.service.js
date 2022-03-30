const db = require("../config/db");

login = (credentials, result) => {
  db.query(
    `SELECT * FROM user WHERE userid ="${credentials.userid}" and password="${credentials.password}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

module.exports = { login };
