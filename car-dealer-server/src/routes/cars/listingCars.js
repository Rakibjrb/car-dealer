const listingRoutes = require("express").Router();
const {
  listingCars,
  sortCars,
} = require("../../controllers/api/cars/listingCars");

listingRoutes.get("/api/listing/cars", listingCars);
listingRoutes.get("/api/listing/sort/price", sortCars);

module.exports = listingRoutes;
