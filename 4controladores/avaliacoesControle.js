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
        const { id }= req.params
     const avaliacao = await avaliacoesServicos.getOneAvali(id)
     if(!avaliacao) {
        return res.status(404).send("Avaliação não encontrada")
     }
     return res.status(200).send(avaliacao)
    } catch (error) {
        return res.status(500).send(`Avaliação não encontrada ${error}`)
    }
}

export const createAvali = async (req, res) => {
    const {comentarios, nota, produto_id, usuario_id} = req.body
    try {
        const newAvali = await avaliacoesServicos.createAvali(comentarios, nota, produto_id, usuario_id)
        return res.status(200).send(newAvali)
    } catch (error) {
        return res.status(500).send(`${error}`)
    }
}

export const updateAvali = async (req, res) => {
    const {id} = req.params
    const {comentarios, nota, produto_id, usuario_id} = req.body
    try {
            const fixedAvali = await avaliacoesServicos.updateAvali(id, comentarios, nota, produto_id, usuario_id)
            if(!fixedAvali) {
                return res.status(404).send("Impossível alterar avaliação")
            }
            return res.status(200).send(`Avaliação atualizada :)`)
    } catch (error) {
        return res.status(500).send(`impossível atualizar avaliação ${error}`)
    }

}

export const deleteAvali = async (req, res) => {
    const {id} = req.params
    try {
        await avaliacoesServicos.deleteAvali(id)
        return res.status(200).send(`Eliminada com sucesso`)
    } catch (error) {
        return res.status(500).send(`Erro ao tentar apagar ${error}`)
    }
}