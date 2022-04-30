const { connection, sequalizeCon } = require("../config/db");
const Joi = require("joi");

login = (credentials, result) => {
 // const { userid, password } = credentials;

  const schema = Joi.object({
    userid: Joi.string().min(5).required(),
    password: Joi.string().min(6).required(),
  });

  const result12 = schema.validate(credentials);

  console.log(result12);

  if (result12.error) {
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
