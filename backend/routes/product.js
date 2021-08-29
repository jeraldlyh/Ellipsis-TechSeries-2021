const express = require("express")
const { uploadProductImage, createProduct, getProduct, getProductByID, updateProductByID } = require("../controller/product")
const router = express.Router()


router.route("/").post(createProduct).get(getProduct)
router.route("/:productID").get(getProductByID).post(updateProductByID)
router.route("/image").post(uploadProductImage)
// router.get("/notif", async(req, res)=>{
//     console.log("hello1")
//     const chatID = 73874853
//     const botID = "1921909531:AAGLurVfcrqMKzgk2DEzSE2SkYyFpYYKEo0"
//     const text = "YOOO"
//     const url = "https://api.telegram.org/bot" + botID + "/sendmessage?chat_id=" + chatID + "&parse_mode=Markdown&text=" + text; 
//     console.log(url)
//     await fetch(url);
//     return res.status(200)
// })

module.exports = router