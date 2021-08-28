const express = require("express")
const router = express.Router()
const { loginUser, createUser } = require("../controller/auth")


router.post("/login", loginUser)
router.post("/register", createUser)

module.exports = router