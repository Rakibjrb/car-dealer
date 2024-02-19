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

module.exports = { listingCars };
