const favourites = require("express").Router();
const {
  saveFavourites,
  getFavourites,
  removeFavourites,
} = require("../../controllers/api/favourites/favourites");
const { verifyToken } = require("../../controllers/middlewares/jwt/jwt");

favourites.post("/api/favourites", verifyToken, saveFavourites);
favourites.get("/api/favourites/:email", verifyToken, getFavourites);
favourites.delete("/api/favourites/:id", verifyToken, removeFavourites);

module.exports = favourites;
