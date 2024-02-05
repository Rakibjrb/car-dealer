const featuredRoutes = require("express").Router();
const { featured } = require("../../controllers/api/featured/featured");

featuredRoutes.get("/api/featured", featured);
module.exports = featuredRoutes;
