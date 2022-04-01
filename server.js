const express = require("express");
const dbConnect = require("./dbConnect");
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/usersRoute");
const billsRoute = require("./routes/billsRoute");
const app = express();
const port = 8000;
app.use(express.json());
app.use("/api/items", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bills/", billsRoute);
app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Listening to port ${port}`));
