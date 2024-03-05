const payment = require("express").Router();
const { savePaymentInfo } = require("../../controllers/api/payment/payment");
const createPaymentIntens = require("../../controllers/api/payment/paymentIntent");

payment.post("/api/create-payment-intent", createPaymentIntens);
payment.post("/api/save-payment-info", savePaymentInfo);

module.exports = payment;
