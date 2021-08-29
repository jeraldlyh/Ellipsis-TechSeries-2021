const Models = require("../models")


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
    getCompanyByID: async function (req, res) {
        const { companyID } = req.params
        const company = await Models.Company.findOne({
            where: {
                uen: companyID
            }
        })
        return res.status(200).json({ company: company.toJSON() })
    },
    getOrderReq: async function (req, res) {
        const { companyID } = req.params
        const orders = await Models.Order.findAll({
            include: [{
                model: Models.Cart,
                where: {
                    companyID: companyID
                }
            }]
        })
        console.log(orders)
        return res.sendStatus(200)
    }
}