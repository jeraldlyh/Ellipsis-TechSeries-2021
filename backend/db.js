const { Sequelize } = require("sequelize")


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: 3306
    }
)

// db.sync({ force: true })
module.exports = db