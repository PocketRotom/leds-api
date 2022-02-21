const Leds = require("../models/leds.js");

module.exports = {
    powerON: async (req, res) => {
        try {

            let status = await Leds.powerON();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    powerOFF: async (req, res) => {
        try {

            let status = await Leds.powerOFF();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    up: async (req, res) => {
        try {

            let status = await Leds.up();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    down: async (req, res) => {
        try {

            let status = await Leds.down();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    flash: async (req, res) => {
        try {

            let status = await Leds.flash();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    strobe: async (req, res) => {
        try {

            let status = await Leds.strobe();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    fade: async (req, res) => {
        try {

            let status = await Leds.fade();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    smooth: async (req, res) => {
        try {

            let status = await Leds.smooth();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    white: async (req, res) => {
        try {

            let status = await Leds.white();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    red1: async (req, res) => {
        try {

            let status = await Leds.red1();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    red2: async (req, res) => {
        try {

            let status = await Leds.red2();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    red3: async (req, res) => {
        try {

            let status = await Leds.red3();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    red4: async (req, res) => {
        try {

            let status = await Leds.red4();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    red5: async (req, res) => {
        try {

            let status = await Leds.red5();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    green1: async (req, res) => {
        try {

            let status = await Leds.green1();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    green2: async (req, res) => {
        try {

            let status = await Leds.green2();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    green3: async (req, res) => {
        try {

            let status = await Leds.green3();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    green4: async (req, res) => {
        try {

            let status = await Leds.green4();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    green5: async (req, res) => {
        try {

            let status = await Leds.green5();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    blue1: async (req, res) => {
        try {

            let status = await Leds.blue1();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    blue2: async (req, res) => {
        try {

            let status = await Leds.blue2();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    blue3: async (req, res) => {
        try {

            let status = await Leds.blue3();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    blue4: async (req, res) => {
        try {

            let status = await Leds.blue4();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    blue5: async (req, res) => {
        try {

            let status = await Leds.blue5();

            return res.status(200).json({
                success: true,
                count: 1,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
}