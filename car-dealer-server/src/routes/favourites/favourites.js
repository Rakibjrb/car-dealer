const favourites = require("express").Router();
const {
  saveFavourites,
  getFavourites,
  removeFavourites,
} = require("../../controllers/api/favourites/favourites");

favourites.post("/api/favourites", saveFavourites);
favourites.get("/api/favourites/:email", getFavourites);
favourites.delete("/api/favourites/:id", removeFavourites);

module.exports = favourites;
