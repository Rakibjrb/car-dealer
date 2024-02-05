const data = require("../../../models/testimonials.json");

const testimonials = (req, res, next) => {
  try {
    res.send(JSON.stringify(data));
  } catch (error) {
    next(error);
  }
};

module.exports = { testimonials };
