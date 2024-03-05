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

module.exports = { savePaymentInfo };
