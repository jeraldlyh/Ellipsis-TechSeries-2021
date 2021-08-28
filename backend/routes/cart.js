const express = require("express")
const router = express.Router()
const { updateCart, getCart } = require("../controller/cart")


router.route("/").post(updateCart).get(getCart)

module.exports = router