const favourites = require("express").Router();
const {
  saveFavourites,
  getFavourites,
} = require("../../controllers/api/favourites/favourites");

favourites.post("/api/favourites", saveFavourites);
favourites.get("/api/favourites/:email", getFavourites);

module.exports = favourites;
