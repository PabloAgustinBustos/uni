const app = require("./app")
const sequelize = require("./db")
const Estudiante = require("./models/Estudiante")
const Materia = require("./models/Materia")

// Primero verifica que se haya conectado a la base de datos bien
sequelize.authenticate()
.then(() => {
  // Cuando se haya conectado, crea la relación
  Estudiante.belongsToMany(Materia, {through: "Matriculacion"})
  Materia.belongsToMany(Estudiante, {through: "Matriculacion"})

  // Luego sincroniza las entidades.
  sequelize.sync({ alter: true }).then(() => {
    // Una vez sincronizadas, se inicia la app
    app.listen(3001, () => console.log("lanzado"))
  }).catch((reason) => {
    console.log("Error al sincronizar", reason)
  })
})
.catch(() => {
  console.log("conexión fallida")
})
