const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("uni", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres"
})

module.exports = sequelize