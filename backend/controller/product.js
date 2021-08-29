const Models = require("../models")
const _ = require("lodash")
const AWS = require("aws-sdk")
const { uuid } = require("uuidv4")


module.exports = {
    createProduct: async function (req, res) {
        const { name, description, quantity, image, instalment, price, companyID } = req.body
        await Models.Product.create({
            name: name,
            description: description,
            quantity: quantity,
            image: image,
            instalment: instalment,
            price: price,
            companyID, companyID
        })
        return res.sendStatus(200)
    },
    uploadProductImage: async function (req, res) {
        const { data, type } = req.body

        const S3Bucket = new AWS.S3({
            accessKeyId: process.env.S3_ACCESS_ID,
            secretAccessKey: process.env.S3_ACCESS_KEY,
        })
        const buffer = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""), "base64")
        const bucket = process.env.S3_BUCKET_NAME
        const params = {
            Bucket: bucket,
            Key: uuid(),
            Body: buffer,
            ContentEncoding: "base64",
            ContentType: type
        }
        S3Bucket.upload(params, function (error, data) {
            if (error) {
                console.log(error)
                return res.status(400).send(error.code)
            }
            console.log(data, data.Location)
            return res.status(201).json({ imageURL: data.Location })
        })
    },
    
    getProduct: async function (req, res) {
        const products = await Models.Product.findAll({
            where: {
                isHidden: false
            },
            include: {
                model: Models.Company,
                attributes: ["name"]
            }
        })

        const result = _.map(products, function (p) {
            return p.toJSON()
        })
        res.status(200).json({ products: result })
    },
    getProductByID: async function (req, res) {
        const product = await Models.Product.findOne({
            where: {
                id: req.params.productID,
            },
            include: {
                model: Models.Company,
                attributes: ["name"]
            }
        })
        return res.status(200).json({ product: product })
    },
    updateProductByID: async function (req, res) {
        const { productID } = req.params
        const { name, description, quantity, image, instalment, price, companyID } = req.body

        const product = await Models.Product.findOne({
            where: {
                id: productID
            }
        })
        await product.update({
            name: name,
            description: description,
            quantity: quantity,
            image: image,
            instalment: instalment,
            price: price,
        })
        return res.sendStatus(200)
    }
}