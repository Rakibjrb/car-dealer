const listingRoutes = require("express").Router();
const {
  listingCars,
  sortCars,
  carType,
} = require("../../controllers/api/cars/listingCars");

listingRoutes.get("/api/listing/cars", listingCars);
listingRoutes.get("/api/listing/sort/price", sortCars);
listingRoutes.get("/api/listing/:type", carType);

module.exports = listingRoutes;
