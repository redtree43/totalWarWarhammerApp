const express = require("express");
const router = express.Router();

const unitsController = require("../controllers/unitsController");

router.get("/units/:id", unitsController.unit_detail);

router.get("/units", unitsController.unit_list);

router.get("/", unitsController.index);

module.exports = router;
