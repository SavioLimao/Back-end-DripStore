import * as avaliacoesRepo from "../2repositorios/avaliacoesRepo.js"

export const allAvaliacoes = async () => {
    const avalis = await avaliacoesRepo.allAvaliacoes()
    return avalis
}
export const getOneAvali = async (id) => {
    const avaliacao = await avaliacoesRepo.getOneAvali(id)
    return avaliacao
}

export const createAvali = async (comentarios, nota, produto_id, usuario_id) => {
    const avaliacao = await avaliacoesRepo.createAvali(comentarios, nota, produto_id, usuario_id)
    return avaliacao
}

export const updateAvali = async (id, comentarios, nota, produto_id, usuario_id) => {
    const fixedAvali = await avaliacoesRepo.updateAvali(id, comentarios, nota, produto_id, usuario_id)
    return fixedAvali
}

export const deleteAvali = async (id) => {
    const avali = await avaliacoesRepo.deleteAvali(id)
    return avali
}