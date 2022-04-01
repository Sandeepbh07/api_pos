const express = require("express");
const BillModel = require("../models/billModel");
const billsRouter = express.Router();

billsRouter.post("/charge-bill", async (req, res) => {
  try {
    const newBill = new BillModel(req.body);
    await newBill.save();
    res.send("Bill charged successfully");
  } catch (err) {}
});

billsRouter.get("/get-all-bills", async (req, res) => {
  try {
    const bills = await BillModel.find();
    res.send(bills);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = billsRouter;
