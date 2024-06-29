const { Router } = require("express")
const { obtenerEstudiante, obtenerEstudiantes, agregarEstudiantes } = require("../controllers/Estudiante.controller")
const { validateDTO } = require("../middlewares/Estudiante.middleware")

const routes = Router()

routes.get("/", obtenerEstudiantes)
routes.get("/:id", obtenerEstudiante)

routes.post("/", validateDTO, agregarEstudiantes)

module.exports = routes