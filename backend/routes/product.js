const express = require("express")
const { uploadProductImage, createProduct } = require("../controller/product")
const router = express.Router()


router.route("/").post(createProduct)
router.route("/image").post(uploadProductImage)

module.exports = router