const { model, Schema } = require("mongoose");

const favouritesSchema = new Schema({
  itemId: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  useremail: { type: String, required: true },
  price: { type: String, required: true },
});

const Favourites = model("Favourites", favouritesSchema, "favourites");
module.exports = Favourites;
