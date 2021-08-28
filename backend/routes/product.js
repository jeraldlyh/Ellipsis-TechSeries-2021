const express = require("express")
const { uploadProductImage, createProduct, getProduct } = require("../controller/product")
const router = express.Router()


router.route("/").post(createProduct).get(getProduct)
router.route("/image").post(uploadProductImage)

module.exports = router