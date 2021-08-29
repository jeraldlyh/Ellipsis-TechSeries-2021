require("dotenv").config()
const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")
const companyRoutes = require("./routes/company")
const authRoutes = require("./routes/auth")
const cartRoutes = require("./routes/cart")
const productRoutes = require("./routes/product")
const listingRoutes = require("./routes/listing")
const telegramRoutes = require("./routes/telegram")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/company", companyRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/product", productRoutes)
app.use("/api/listing", listingRoutes)
app.use("/api/telegram", telegramRoutes)
app.get("/", (req, res) => {
    res.json({ message: "ok" })
})
app.get("/telegram", async (req, res) => {
    console.log("here")
    const botID = "1921909531:AAGLurVfcrqMKzgk2DEzSE2SkYyFpYYKEo0"
    const chatID = 73874853
    const text = "YOOO"
    const url = "https://api.telegram.org/bot" + botID + "/sendmessage?chat_id=" + chatID + "&parse_mode=Markdown&text=" + text;
    console.log(url)
    fetch(url).then(res => console.log(res)).catch(err => console.log(errr))
    return res.sendStatus(200)
})
const port = process.env.PORT || 8000
app.listen(port, () => console.log("Server is running"))