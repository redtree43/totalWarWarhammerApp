const express = require("express");
const app = express();
const indexRouter = require("./routers/index");
const allDataRouter = require("./routers/allData");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/warhammer");
const db = mongoose.connection;
db.on("error", console.error.bind(console, " connection error:"));
db.once("open", function() {
  console.log("connected to the Warhammer db!");
});

app.listen(3001);

app.use("/", indexRouter);
app.use("/allData", allDataRouter);

// const unitsRouter = require("./routers/units");
// app.use("/units", unitsRouter);
