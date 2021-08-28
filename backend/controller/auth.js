const jwt = require("jsonwebtoken")
const Models = require("../models")
const _ = require("lodash")


const refreshTokens = {}

module.exports = {
    loginUser: async function (req, res) {
        const { uen, password } = req.body
        const response = await Models.Company.findOne({
            where: {
                uen: uen,
                password: password,
            }
        })
        if (response) {
            const token = module.exports.generateAccessToken(uen)
            const tokenResponse = {
                access: token,
                refresh: token,
                uen: uen,
            }
            res.status(200).json(tokenResponse)
            _.extend(refreshTokens, tokenResponse)
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
}