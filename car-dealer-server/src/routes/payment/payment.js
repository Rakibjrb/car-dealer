const payment = require("express").Router();
const {
  savePaymentInfo,
  getOrders,
} = require("../../controllers/api/payment/payment");
const createPaymentIntens = require("../../controllers/api/payment/paymentIntent");
const { verifyToken } = require("../../controllers/middlewares/jwt/jwt");

payment.post("/api/create-payment-intent", verifyToken, createPaymentIntens);
payment.post("/api/save-payment-info", verifyToken, savePaymentInfo);
payment.get("/api/orders/:id", verifyToken, getOrders);

module.exports = payment;
