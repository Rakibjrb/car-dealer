const Cars = require("../../../models/Cars/cars");

const listingCars = async (req, res, next) => {
  try {
    const skip = req.query.skip;
    const allCars = await Cars.find({}).skip(skip).limit(9);
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
      price: { $gte: 10000, $lte: queries.high },
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
    const typeMatchedCars = await Cars.find({ carType });
    res.send({
      cars: typeMatchedCars,
      total: typeMatchedCars.length || 0,
    });
  } catch (error) {
    next(error);
  }
};

const searchCars = async (req, res, next) => {
  try {
    const text = req.query.search;
    const regex = new RegExp(text, "i");
    const matchedCars = await Cars.find({
      title: { $regex: regex },
    }).limit(12);
    res.send({
      matchedCars,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { listingCars, sortCars, carType, searchCars };
