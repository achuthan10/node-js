const { connection, sequalizeCon } = require("../config/db");

login = (credentials, result) => {
  const { userid, password } = credentials;

  if (!(userid && password)) {
    result(null, null);
    return;
  }

  connection.query(
    `SELECT * FROM user WHERE userid ="${credentials.userid}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      const user = res.length > 0;

      if (!user) {
      }
      result(null, res);
    }
  );
};

module.exports = { login };
