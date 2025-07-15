import * as avaliacoesServicos from "../3servicos/avaliacoesServicos.js"

export const allAvaliacoes = async (req, res) => {
    try {
     const avalis = await avaliacoesServicos.allAvaliacoes()
     return res.status(200).send(avalis)
    } catch (error) {
        return res.status(500).send(`Erro de conexão ${error}`)
    }
}
export const getOneAvali = async (req, res) => {
    try {
     const avalis = await avaliacoesServicos.getOneAvali(id)
     return res.status(200).send(avalis)
    } catch (error) {
        return res.status(500).send(`Avaliação não encontrada ${error}`)
    }
}