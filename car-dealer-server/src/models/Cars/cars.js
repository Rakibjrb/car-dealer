const { model, Schema } = require("mongoose");

const carSchema = new Schema({
  featured: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: Array, required: true },
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: String, required: true },
  fuelType: { type: String, required: true },
  mileage: { type: String, required: true },
  transmission: { type: String, required: true },
  recect: { type: String, required: true },
});

const Cars = model("Cars", carSchema, "cars");
module.exports = Cars;
