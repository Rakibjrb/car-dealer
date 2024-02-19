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
    console.log(queries);
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

module.exports = { listingCars, sortCars };
