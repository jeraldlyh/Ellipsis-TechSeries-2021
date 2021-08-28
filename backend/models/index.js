const Company = require("./company")
const Product = require("./product")
const Cart = require("./cart")
const Order = require("./order")
const Payment = require("./payment")


Company.hasMany(Product, { sourceKey: "UEN", foreignKey: "companyID" })
Company.hasMany(Cart, { sourceKey: "UEN", foreignKey: "companyID" })

Product.belongsTo(Company, { foreignKey: "companyID" })
Product.hasMany(Cart, { sourceKey: "id", foreignKey: "productID" })

Cart.belongsTo(Product, { foreignKey: "productID" })
Cart.belongsTo(Company, { foreignKey: "companyID" })
Cart.hasOne(Order, { sourceKey: "id", foreignKey: "cartID" })

Order.belongsTo(Order, { foreignKey: "cartID" })
Order.hasOne(Payment, { sourceKey: "id", foreignKey: "orderID" })

Payment.belongsTo(Order, { foreignKey: "orderID" })

module.exports = {
    Company,
    Cart,
    Product,
    Order,
    Payment,
}