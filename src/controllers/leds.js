const Leds = require("../models/leds.js");

module.exports = {
    powerON: async (req, res) => {
        try {
            //let leagueID = req.query.leagueID;

            let status = await Leds.powerON();

            return res.status(200).json({
                success: true,
                count: 1,
                data: status
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
}