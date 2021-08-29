const Models = require("../models")
const _ = require("lodash")


module.exports = {
    creditRatingCalculation: async function (req, res) {
        const { quickRatio, netProfitMargin, debtRatio, operatingCashFlowPerShare,companyUEN } = req.body
        const creditRating = Number("-1.0595E-2") * quickRatio + Number("6.475440E-2") * netProfitMargin + Number("-1.47744E1") * debtRatio + Number("-3.6729E-7") * operatingCashFlowPerShare
        var existingCompany = await Models.Company.findOne({
            where: {
                UEN: companyUEN
            }
        })
        if (existingCompany){
            await existingCompany.update({
                creditRating : creditRating.toFixed(2)
            })
        }
        return res.sendStatus(200)

    },
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