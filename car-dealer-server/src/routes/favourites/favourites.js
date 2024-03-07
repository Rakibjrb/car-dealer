const favourites = require("express").Router();
const {
  saveFavourites,
} = require("../../controllers/api/favourites/favourites");

favourites.post("/api/favourites", saveFavourites);

module.exports = favourites;
