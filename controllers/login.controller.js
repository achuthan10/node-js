exports.login = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  else{
    res.status(200).send({
        message: req.body,
      });
  }
};
