const Cars = require("../../../models/Cars/cars");

const listingCars = async (req, res, next) => {
  try {
    const allCars = await Cars.find({ featured: "false" });
    res.send({
      cars: allCars,
      total: allCars.length || 0,
    });
  } catch (err) {
    next(err);
  }
};

const sortCars = async (req, res, next) => {
  try {
    const queries = req.query;
    const sortedCars = await Cars.find({
      featured: "false",
      price: { $gte: queries.low, $lte: queries.high },
    });
    res.send({
      cars: sortedCars,
      total: sortedCars.length || 0,
    });
  } catch (err) {
    next(err);
  }
};

const carType = async (req, res, next) => {
  try {
    const carType = req.params.type;
    const typeMatchedCars = await Cars.find({ featured: "false", carType });
    res.send({
      cars: typeMatchedCars,
      total: typeMatchedCars.length || 0,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { listingCars, sortCars, carType };
