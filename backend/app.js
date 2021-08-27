const express = require("express")
const cors = require("cors")
require("dotenv").config()
const companyRoutes = require("./routes/company")


const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/company", companyRoutes)
app.get("/", (req, res) => {
    res.json({ message: "ok" })
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log("Server is running"))