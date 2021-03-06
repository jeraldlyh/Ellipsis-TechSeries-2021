const Models = require("../models")
const _ = require("lodash")


module.exports = {
    updateCart: async function (req, res) {
        const { quantity, productID, companyID } = req.body

        var existingCart = await Models.Cart.findOne({
            where: {
                productID: productID,
                companyID: companyID,
            }
        })

        if (existingCart) {             // Update existing quantity 
            existingCart.update({
                quantity: quantity
            })
        } else {
            await Models.Cart.create({
                productID: productID,
                companyID: companyID,
                quantity: quantity,
            })
        }
        return res.sendStatus(201)
    },
    getCart: async function (req, res) {
        await Models.Cart.findAll({
            where: {
                companyID: companyID,
            }
        })
    },
    getProductByID: async function (req, res) {
        const { productID, companyID } = req.params

        const cart = await Models.Cart.findOne({
            where: {
                companyID: companyID,
                productID: productID,
            }
        })
        cart ? res.status(200).json({ cart: cart.toJSON() }) : res.sendStatus(200)
    }
}