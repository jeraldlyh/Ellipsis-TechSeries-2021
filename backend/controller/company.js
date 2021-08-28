const Models = require("../models")


module.exports = {
    creditRatingCalculation: async function (req, res) {
        const { quickRatio, netProfitMargin, debtRatio, operatingCashFlowPerShare } = req.body
        Number("4.874915326E7")
        const creditRating = Number("-1.0595E-2") * quickRatio + Number("6.475440E-2") * netProfitMargin + Number("-1.47744E1") * debtRatio + Number("-3.6729E-7") * operatingCashFlowPerShare
        await Models.Company.update({
            creditRating: creditRating.toFixed(2)
        })
        return res.sendStatus(200)
    }
}