import express from "express"
import * as avaliacoesControle from "../4controladores/avaliacoesControle.js"

const exp = express.Router()

exp.get("/avaliacoes", avaliacoesControle.allAvaliacoes)
exp.get("/avaliacao/:id", avaliacoesControle.getOneAvali)
exp.post("/avaliacoes/", avaliacoesControle.createAvali)
exp.put("/avaliacoes/:id", avaliacoesControle.updateAvali)
exp.delete("/avaliacoes/:id", avaliacoesControle.deleteAvali)

export default exp