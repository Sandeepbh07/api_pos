const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: false },
  },
  { timestamps: true }
);

const usersModel = mongoose.model("User", userSchema);

module.exports = usersModel;
