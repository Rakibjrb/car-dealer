const Cars = require("../../../models/Cars/cars");

const featured = async (req, res, next) => {
  try {
    const featuredCars = await Cars.find({});
    res.send(featuredCars);
  } catch (error) {
    next(error);
  }
};

module.exports = { featured };
