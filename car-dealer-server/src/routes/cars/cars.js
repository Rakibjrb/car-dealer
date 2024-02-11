const featuredRoutes = require("express").Router();
const { featured } = require("../../controllers/api/cars/cars");

featuredRoutes.get("/api/featured", featured);
module.exports = featuredRoutes;
