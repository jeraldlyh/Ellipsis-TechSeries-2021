require("dotenv").config()
const express = require("express")
const cors = require("cors")
const companyRoutes = require("./routes/company")
const authRoutes = require("./routes/auth")
const cartRoutes = require("./routes/cart")
const productRoutes = require("./routes/product")
const listingRoutes = require("./routes/listing")

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
app.get("/", (req, res) => {
    res.json({ message: "ok" })
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log("Server is running"))