const {DataTypes} = require("sequelize")
const sequelize = require("../db")

const Estudiante = sequelize.define("Estudiante", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Estudiante