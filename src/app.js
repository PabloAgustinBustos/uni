const express = require("express")
const estudianteRoutes = require("./routes/Estudiante.routes")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  console.log("petición hecha a /")

  return res.status(200).send({
    status: "ok"
  })
})

app.use("/estudiante", estudianteRoutes)
// app.use("/materia", )

app.use((req, res) => {
  return res.status(404).json({
    message: "no existe esa ruta"
  })
})

module.exports = app