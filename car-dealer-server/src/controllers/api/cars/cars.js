const Cars = require("../../../models/Cars/cars");

const getCars = async (req, res, next) => {
  try {
    const carId = req.params.id;
    if (carId) {
      //for getting one car by id
      const car = await Cars.findOne({ _id: carId });
      res.send(car);
      return;
    } else {
      //for getting all cars
      const cars = await Cars.find({});
      res.send(cars);
      return;
    }
  } catch (error) {
    next(error);
  }
};

//get only featured cars
const featured = async (req, res, next) => {
  try {
    const featuredCars = await Cars.find({ featured: "true" });
    res.send(featuredCars);
  } catch (error) {
    next(error);
  }
};

//count total cars
const countTotalCars = async (req, res, next) => {
  try {
    const totalCars = await Cars.estimatedDocumentCount();
    res.send({
      totalCars,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { featured, getCars, countTotalCars };
