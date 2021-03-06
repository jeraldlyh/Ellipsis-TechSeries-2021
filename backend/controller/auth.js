const jwt = require("jsonwebtoken")
const Models = require("../models")
const _ = require("lodash")


var refreshTokens = []

module.exports = {
    loginUser: async function (req, res) {
        const { email, password } = req.body
        const company = await Models.Company.findOne({
            where: {
                email: email,
                password: password,
            }
        })
        if (company) {
            const UEN = company.toJSON().UEN
            const token = module.exports.generateAccessToken(UEN)
            const tokenResponse = {
                access_token: token,
                refresh_token: token,
                uen: UEN,
            }
            refreshTokens.push(token)
            res.status(200).json(tokenResponse)
        } else {
            res.status(401).end()
        }
    },
    createUser: async function (req, res) {
        const { name, password, UEN, address, email } = req.body
        await Models.Company.create({
            name: name,
            password: password,
            UEN: UEN,
            address: address,
            email: email,
        })
        res.status(200).end()
    },
    generateAccessToken: function (uen) {
        return jwt.sign(
            { id: uen },
            process.env.TOKEN_SECRET,
            { expiresIn: "1800s" }
        )
    },
    authenticateToken: function (req, res, next) {
        const authHeader = req.headers["Authorization"]
        const token = authHeader && authHeader.split(" ")[1]

        if (token == null) {
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            console.log(err)
            if (err) {
                return res.sendStatus(403)
            }
            req.uen = user
            next()
        })
    },
    refreshToken: function (req, res) {
        const token = req.body.refresh_token
        if (!_.includes(refreshTokens, token)) {
            return res.sendStatus(403)
        }
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }
            const token = module.exports.generateAccessToken(user.id)
            return res.status(200).json({ "access_token": token })
        })
    },
    logoutUser: function (req, res) {
        const { token } = req.body
        refreshTokens = _.filter(refreshTokens, function (t) {
            return t !== token
        })
    },
}