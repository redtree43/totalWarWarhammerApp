const express = require("express");
const router = express.Router();

// const allData = require("./allData");

router.get("/", function(req, res) {
  res.redirect("/allData");
});

module.exports = router;
