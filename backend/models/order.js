const { DataTypes, Deferrable, Sequelize } = require("sequelize")
const db = require("../db")
const Cart = require("./cart")


const Order = db.define(
    "Order",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
        },
        cartID: {
            type: DataTypes.UUID,
            references: {
                model: Cart,
                key: "id",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            }
        },
        status: {
            type: DataTypes.ENUM(["ACCEPTED", "NOT ACCEPTED"]),
            allowNull: false,
            defaultValue: "NOT ACCEPTED",
        },
    },
    { timestamps: true }
)

module.exports = Order