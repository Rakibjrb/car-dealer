const Testimonials = require("../../../models/Testimonials/testimonials");

const testimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonials.find({});
    res.send(testimonials);
  } catch (error) {
    next(error);
  }
};

module.exports = { testimonials };
