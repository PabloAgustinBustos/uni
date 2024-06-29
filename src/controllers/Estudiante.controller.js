const Estudiante = require("../models/Estudiante")

module.exports = {
  // controller handler para obtener TODOS los estudiantes
  obtenerEstudiantes: (req, res) => {
    return res.status(200).json({
      status: "ok",
      amount: 0,
      data: []
    })
  },

  // controller handler para obtener UN SOLO estudiante
  obtenerEstudiante: (req, res) => {
    const { id } = req.params

    console.log("buscando estudiante con id", id)

    return res.status(200).json({
      status: "ok",
      data: {}
    })
  },

  agregarEstudiantes: async(req, res) => {
    for (const estudiante of req.body) {
      // console.log("se agrega el siguiente estudiante", estudiante)

      const res = await Estudiante.create(estudiante)
  
      // console.log("res:", res, "\n")
    }
    
    return res.status(200).json({
      status: "added",
      message: "estudiantes agregados al sistema"
    })
  }
}