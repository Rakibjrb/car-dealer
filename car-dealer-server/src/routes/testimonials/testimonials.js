const testimonialRoutes = require("express").Router();
const {
  testimonials,
} = require("../../controllers/api/testimonials/testimonials");

testimonialRoutes.get("/api/testimonials", testimonials);

module.exports = testimonialRoutes;
