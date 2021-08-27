const Company = require("../models/company")


module.exports = {
    createCompany: async function (req, res) {
        const { name, UEN, address } = req.body
        await Company.create({
            name: name,
            UEN: UEN,
            address: address,
        })
        res.status(200).end()
    },
}