const express = require("express")
const router = express.Router()
const { createCompany } = require("../controller/company")


router.route("/").post(createCompany)

module.exports = router