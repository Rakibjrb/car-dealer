const featuredRoutes = require("express").Router();
const {
  featured,
  getCars,
  countTotalCars,
} = require("../../controllers/api/cars/cars");

featuredRoutes.get("/api/cars", getCars);
featuredRoutes.get("/api/cars/:id", getCars);
featuredRoutes.get("/api/featured", featured);
featuredRoutes.get("/api/car/count", countTotalCars);
module.exports = featuredRoutes;
