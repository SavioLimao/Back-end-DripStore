import express from "express"
import * as avaliacoesControle from "../4controladores/avaliacoesControle.js"

const exp = express.Router()

exp.get("/avaliacoes", avaliacoesControle.allAvaliacoes)

export default exp