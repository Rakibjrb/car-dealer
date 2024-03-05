const { model, Schema } = require("mongoose");

const paymentSchema = new Schema({
  trxID: { type: String, required: true },
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  phone: { type: String, required: true },
  fullAddress: { type: String, required: true },
  invoiceId: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: String, required: true },
  serviceCharge: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  payable: { type: Number, required: true },
  due: { type: Number, required: true },
});

const Payment = model("Payment", paymentSchema, "payment");
module.exports = Payment;
