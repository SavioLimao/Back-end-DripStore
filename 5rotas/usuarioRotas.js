import express from "express"
import * as userControls from "../4controladores/usuariosControle.js"

const exp = express.Router()

exp.get("/usuarios", userControls.allUsers)
exp.get("/usuario/:id", userControls.getOneU)
exp.post("/usuario", userControls.postU)
exp.put("/usuario/:id", userControls.putU)
exp.delete("/usuario/:id", userControls.dellU)

export default exp