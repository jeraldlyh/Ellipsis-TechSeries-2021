const express = require("express")
const router = express.Router()
const { loginUser, createUser, refreshToken, logoutUser } = require("../controller/auth")


router.post("/login", loginUser)
router.post("/register", createUser)
router.post("/logout", logoutUser)
router.post("/token/refresh", refreshToken)

module.exports = router