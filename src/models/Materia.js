const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Materia = sequelize.define("Materia", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    
    validate: {
      isCorrect(value) {
        console.log("se ingresa " + value + " como potencial ID")
      }
    }
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Materia