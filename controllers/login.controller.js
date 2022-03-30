const LoginService = require("../services/login.service");

const login = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  } else {
    LoginService.login(req.body, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      else if (data.length == 0) {
        res.status(300).send({
          message: "invalid Credentials",
        });
      } else res.send(data);
    });
  }
};

module.exports = {
  login,
};
