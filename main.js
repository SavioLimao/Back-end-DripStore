import express from "express"
import usuarioRotas from "./5rotas/usuarioRotas.js"

const app = express()
app.use(express.json())

app.use("/api",usuarioRotas)

const PORT = "80"
// const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})