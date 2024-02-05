const data = require("../../../models/featured.json");

const featured = (req, res, next) => {
  try {
    res.send(JSON.stringify(data));
  } catch (error) {
    next(error);
  }
};

module.exports = { featured };
