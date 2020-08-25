const User = require("../model/empModel");

function loginUser(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  User.find({ email: email, password: password }, function (err, user) {
    if (err) {
      return res.status(400).send("invalid credentials");
    }

    res.json("Logged in successfully!");
  });
}
module.exports = { loginUser };
