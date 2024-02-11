const featuredRoutes = require("express").Router();
const { featured, getCars } = require("../../controllers/api/cars/cars");

featuredRoutes.get("/api/cars", getCars);
featuredRoutes.get("/api/cars/:id", getCars);
featuredRoutes.get("/api/featured", featured);
module.exports = featuredRoutes;
