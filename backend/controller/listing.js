const Models = require("../models")
const _ = require("lodash")


module.exports = {
    getProductByID: async function (req, res) {
        const products = await Models.Product.findAll({
            where: {
                companyID: req.params.companyID,
            },
            include: {
                model: Models.Company,
                attributes: ["name"]
            }
        })
        const result = _.map(products, function (p) {
            return p.toJSON()
        })
        return res.status(200).json({ products: result })
    }
}