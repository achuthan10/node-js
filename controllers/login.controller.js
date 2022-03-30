const LoginService = require("../services/login.service");

const login = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  } else {
    const { userid, password } = req.body;
    LoginService.login(userid, password);

    res.status(200).send({
      message: `${userid} logged Successfully`,
    });
  }
};

module.exports = {
  login,
};
