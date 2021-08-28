const { DataTypes, Deferrable, Sequelize } = require("sequelize")
const db = require("../db")
const Company = require("./company")
const Product = require("./product")


const Cart = db.define(
    "Cart",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        companyID: {
            type: DataTypes.STRING(10),
            references: {
                model: Company,
                key: "UEN",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            }
        },
        productID: {
            type: DataTypes.UUID,
            references: {
                model: Product,
                key: "id",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            }
        }
    },
    { timestamps: true }
)

module.exports = Cart