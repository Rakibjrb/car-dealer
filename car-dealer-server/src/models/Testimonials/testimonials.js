const { model, Schema } = require("mongoose");

const testimonialsSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Array, required: true },
  description: { type: String, required: true },
});

const Testimonials = model("Testimonials", testimonialsSchema, "testimonials");
module.exports = Testimonials;
