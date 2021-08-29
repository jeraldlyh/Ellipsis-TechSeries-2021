const express = require("express")
const { creditRatingCalculation } = require("../controller/company")
const { getCompanyByID, getOrderReq } = require("../controller/company")
const router = express.Router()


router.route("/").post(creditRatingCalculation)
router.route("/:companyID").get(getCompanyByID)
router.route("/request/:companyID").get(getOrderReq)
module.exports = router