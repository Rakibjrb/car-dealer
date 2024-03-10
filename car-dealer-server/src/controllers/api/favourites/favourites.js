const Favourites = require("../../../models/favourites/favourites");

const saveFavourites = async (req, res, next) => {
  try {
    const data = req.body;
    const inDB = await Favourites.findOne({
      itemId: data.itemId,
      useremail: data.useremail,
    });
    if (inDB) {
      res.send({
        status: 403,
        message: "Already Added",
      });
      return;
    }
    const savedFavourite = await Favourites.create(data);
    res.send(savedFavourite);
  } catch (error) {
    next(error);
  }
};

const getFavourites = async (req, res, next) => {
  try {
    const email = req.params.email;
    const allItems = await Favourites.find({ useremail: email });
    res.send(allItems);
  } catch (error) {
    next(error);
  }
};

module.exports = { saveFavourites, getFavourites };
