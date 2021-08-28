const { DataTypes, Deferrable } = require("sequelize")
const db = require("../db")


const Company = db.define(
    "Company",
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        UEN: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true,
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    { timestamps: true }
)

module.exports = Company