const express = require("express")
const { sendTeleNotif } = require("../controller/telegram")
const router = express.Router()


router.get("/", async (req, res) => {
    console.log("here")
    const botID = "1921909531:AAGLurVfcrqMKzgk2DEzSE2SkYyFpYYKEo0"
    const chatID = 73874853
    const text = "YOOO"
    const url = "https://api.telegram.org/bot" + botID + "/sendmessage?chat_id=" + chatID + "&parse_mode=Markdown&text=" + text;
    console.log(url)
    fetch(url).then(res => console.log(res)).catch(err => console.log(errr))
    return res.sendStatus(200)
})

module.exports = router