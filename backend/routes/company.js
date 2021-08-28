const express = require("express")
const { creditRatingCalculation } = require("../controller/company")
const router = express.Router()


router.route("/").post(creditRatingCalculation)

module.exports = router