const saveFavourites = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { saveFavourites };
