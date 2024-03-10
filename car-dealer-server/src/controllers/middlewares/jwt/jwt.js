const jwt = require("jsonwebtoken");
require("dotenv").config();

const signToken = (req, res, next) => {
  try {
    const info = req.body;
    var token = jwt.sign({ info }, process.env.Login_Secrete, {
      expiresIn: "1h",
    });
    res.send({
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signToken;
