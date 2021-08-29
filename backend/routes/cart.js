const express = require("express")
const router = express.Router()
const { updateCart, getCart, getProductByID } = require("../controller/cart")


router.route("/").post(updateCart).get(getCart)
router.route("/:productID/:companyID").get(getProductByID)

module.exports = router