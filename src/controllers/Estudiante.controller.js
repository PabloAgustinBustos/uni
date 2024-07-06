const Estudiante = require("../models/Estudiante")

module.exports = {
  // controller handler para obtener TODOS los estudiantes
  obtenerEstudiantes: async(req, res) => {
    let data = []

    try {
      const res = await Estudiante.findAll({
        attributes: ["id", "nombre"]
      })

      data = [...res]
    } catch(e) {
      return res.status(400).json({
        status: "error",
        message: e
      })
    }
    
    return res.status(200).json({
      status: "ok",
      amount: 0,
      data
    })
  },

  // controller handler para obtener UN SOLO estudiante
  obtenerEstudiante: async(req, res) => {
    const { id } = req.params

    let estudiante = {}

    try {
      const res = await Estudiante.findByPk(id, { attributes: ["id", "nombre"] })

      estudiante = res.dataValues
    } catch (e) {
      return res.status(400).json({
        status: "error",
        message: e
      })
    }

    return res.status(200).json({
      status: "ok",
      data: estudiante
    })
  },

  // controller handler para agregar UNO O VARIOS estudiantes
  // body -> array de objetos 
  agregarEstudiantes: async(req, res) => {
    try {
      for (const estudiante of req.body) {
        console.log("se agrega el siguiente estudiante", estudiante)
  
        const res = await Estudiante.create(estudiante)
    
        console.log("res:", res, "\n")
      }
    } catch(e) {
      console.log(e)
    }
    
    return res.status(200).json({
      status: "added",
      message: "estudiantes agregados al sistema"
    })
  }
}