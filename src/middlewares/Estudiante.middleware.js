module.exports = {
  validateDTO: (req, res, next) => {
    // Primero valido que sea un array y que tenga por lo menos un elemento como mínimo
    if (!Array.isArray(req.body)) return res.status(400).json({ status: "wrong format", message: "El body debe ser un array" })
    if (req.body.length < 1) return res.status(400).json({ status: "missing data", message: "Se requiere datos en el body para agregar a la base de datos" })

    const { body } = req

    // Recorro cada elemento
    for (const elemento of body) {
      // Verifico si es un objeto de verdad con propiedades y no un array (los arrays son objects en js)
      if (typeof elemento === "object" && !Array.isArray(elemento)) {
        // Obtengo el array de atributos
        const atributos = Object.getOwnPropertyNames(elemento)

        // Compruebo que tenga el atributo "nombre" y que este sea un string. Si no cumple ninguna, retorno un mensaje de error al cliente
        if (!atributos.includes("nombre") || typeof elemento["nombre"] !== "string") {
          return res.status(400).json({ status: "wrong format", message: "Cada estudiante debe de tener un atributo nombre que sea string" })
        }
      } else {
        return res.status(400).json({ status: "wrong format", message: "Cada estudiante debe de ser un objeto y no cualquier otra cosa" })
      }
    }

    next()
  }
}