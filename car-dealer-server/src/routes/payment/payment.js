const payment = require("express").Router();
const createPaymentIntens = require("../../controllers/api/payment/paymentIntent");

payment.post("/api/create-payment-intent", createPaymentIntens);

module.exports = payment;
