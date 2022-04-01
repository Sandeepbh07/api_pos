const express = require("express");
const ItemModel = require("../models/itemsModel");
const itemsRouter = express.Router();

itemsRouter.get("/get-all-items", async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.send(items);
  } catch (err) {
    res.status(400).json(error);
  }
});

itemsRouter.post("/add-item", async (req, res) => {
  try {
    const newItem = new ItemModel(req.body);
    await newItem.save();
    res.send("Item added successfully");
  } catch (err) {}
});

itemsRouter.post("/edit-item", async (req, res) => {
  try {
    await ItemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.send("Item updated successfully");
  } catch (err) {
    res.status(400).json(error);
  }
});

itemsRouter.post("/delete-item", async (req, res) => {
  try {
    await ItemModel.findOneAndDelete({ _id: req.body.itemId });
    res.send("Item deleted successfully");
  } catch (err) {
    res.status(400).json(error);
  }
});
module.exports = itemsRouter;
