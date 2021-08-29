const express = require("express")
const { creditRatingCalculation } = require("../controller/company")
const { getProductByID } = require("../controller/company")
const router = express.Router()


router.route("/").post(creditRatingCalculation)
router.route("/:companyID").get(getProductByID)
module.exports = router