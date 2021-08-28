const { DataTypes, Deferrable } = require("sequelize")
const db = require("../db")


const Company = db.define(
    "Company",
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        UEN: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        creditRating: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    },
    { timestamps: true }
)

module.exports = Company