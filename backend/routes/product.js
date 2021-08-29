const express = require("express")
const { uploadProductImage, createProduct, getProduct, getProductByID, updateProductByID } = require("../controller/product")
const router = express.Router()


router.route("/").post(createProduct).get(getProduct)
router.route("/:productID/").get(getProductByID).post(updateProductByID)
router.route("/image").post(uploadProductImage)

module.exports = router