module.exports = {
  newUser: (req, res, next) => {
    let { username, password } = req.body;
    req.app
      .get("db")
      .create_user([username, password])
      .then(user => res.status(200).send(user[0]))
      .catch(err => res.send(err));
  },

  loginUser: (req, res, next) => {
    let { username, password } = req.body;
    req.app
      .get("db")
      .login_user([username, password])
      .then(user => res.status(200).send(user))
      .catch(err => res.send(err));
  }
};
