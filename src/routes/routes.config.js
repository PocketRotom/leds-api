const express = require("express");
const router = express.Router();
const leds = require("../controllers/leds.js");

router.get('/', leds.powerON);


module.exports = router;