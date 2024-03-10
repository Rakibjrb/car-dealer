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

const verifyToken = (req, res, next) => {
  const requestToken = req.headers.authorization;
  if (!requestToken) {
    return res.status(401).send({ message: "forbidden access" });
  }
  const token = requestToken?.split(" ")[1];
  jwt.verify(token, process.env.Login_Secrete, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = { signToken, verifyToken };
