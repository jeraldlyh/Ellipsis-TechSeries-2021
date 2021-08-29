const express = require("express")
const { getProductByID } = require("../controller/listing")
const router = express.Router()


router.route("/:companyID").get(getProductByID)

module.exports = router