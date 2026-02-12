const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.BDD_NAME,
    process.env.BDD_USER,
    process.env.BDD_PASSWORD,
    {
        host: process.env.BDD_HOST,
        dialect: process.env.BDD_DIALECT,
    }
)

module.exports = sequelize;