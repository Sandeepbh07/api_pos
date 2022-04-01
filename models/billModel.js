const mongoose = require("mongoose");

const billsSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerPhoneNumber: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    tax: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    paymentMode: { type: String, required: true },
    cartItems: { type: Array, required: true },
  },
  { timestamps: true }
);

const billsModel = mongoose.model("Bill", billsSchema);

module.exports = billsModel;
