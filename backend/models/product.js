const { DataTypes, Deferrable, Sequelize } = require("sequelize")
const db = require("../db")
const Company = require("./company")


const Product = db.define(
    "Product",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        instalment: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        }
    },
    { timestamps: true }
)

module.exports = Product