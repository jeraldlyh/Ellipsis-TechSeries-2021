const { DataTypes, Deferrable, Sequelize } = require("sequelize")
const db = require("../db")
const Order = require("./order")


const Payment = db.define(
    "Payment",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM(["INCOMPLETE", "COMPLETE"]),
            allowNull: false,
            defaultValue: "INCOMPLETE",
        },
        orderID: {
            type: DataTypes.UUID,
            references: {
                model: Order,
                key: "id",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            }
        }
    },
    { timestamps: true }
)

module.exports = Payment