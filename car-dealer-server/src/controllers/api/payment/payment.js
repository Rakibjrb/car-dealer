const Payment = require("../../../models/payment/payment");

const savePaymentInfo = async (req, res, next) => {
  try {
    const data = req.body;
    const saveInfo = await Payment.create(data);
    if (saveInfo) {
      res.send({
        status: 200,
        message: "OK",
      });
    }
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id !== "all") {
      const orderInfo = await Payment.findOne({ _id: id });
      res.send(orderInfo);
      return;
    }
    const orders = await Payment.find({});
    res.send(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = { savePaymentInfo, getOrders };
