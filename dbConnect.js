const mongoose = require("mongoose");

const url =
  "mongodb+srv://sandeep07:9DeI3oTssebQqgvg@pos.onhvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo db connection successful");
});

connectionObj.on("error", () => {
  console.log("Mongo DB connection failed");
});
