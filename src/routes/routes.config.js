const express = require("express");
const router = express.Router();
const leds = require("../controllers/leds.js");

router.get('/', leds.powerON);

router.get('/on', leds.powerON);

router.get('/off', leds.powerOFF);

router.get('/up', leds.up);

router.get('/down', leds.down);

router.get('/flash', leds.flash);

router.get('/strobe', leds.strobe);

router.get('/fade', leds.fade);

router.get('/smooth', leds.smooth);

//Colors

router.get('/white', leds.white);

router.get('/red1', leds.red1);

router.get('/red2', leds.red2);

router.get('/red3', leds.red3);

router.get('/red4', leds.red4);

router.get('/red5', leds.red5);

router.get('/green1', leds.green1);

router.get('/green2', leds.green2);

router.get('/green3', leds.green3);

router.get('/green4', leds.green4);

router.get('/green5', leds.green5);

router.get('/blue1', leds.blue1);

router.get('/blue2', leds.blue2);

router.get('/blue3', leds.blue3);

router.get('/blue4', leds.blue4);

router.get('/blue5', leds.blue5);

module.exports = router;