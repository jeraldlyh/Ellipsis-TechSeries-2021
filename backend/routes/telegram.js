const express = require("express")
const {sendTeleNotif } = require("../controller/product")
const router = express.Router()

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

router.route("/").get(sendTeleNotif)

module.exports = router