const payment = require("express").Router();
const {
  savePaymentInfo,
  getOrders,
} = require("../../controllers/api/payment/payment");
const createPaymentIntens = require("../../controllers/api/payment/paymentIntent");

payment.post("/api/create-payment-intent", createPaymentIntens);
payment.post("/api/save-payment-info", savePaymentInfo);
payment.get("/api/orders/:id", getOrders);

module.exports = payment;
