require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRETE);

const createPaymentIntens = async (req, res, next) => {
  const { price } = req.body;
  const total = parseInt(price * 100);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    next(e);
  }
};

module.exports = createPaymentIntens;
