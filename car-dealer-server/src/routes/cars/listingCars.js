const listingRoutes = require("express").Router();
const { listingCars } = require("../../controllers/api/cars/listingCars");

listingRoutes.get("/api/listing/cars", listingCars);

module.exports = listingRoutes;
