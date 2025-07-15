import * as avaliacoesRepo from "../2repositorios/avaliacoesRepo.js"

export const allAvaliacoes = async () => {
    const avalis = await avaliacoesRepo.allAvaliacoes()
    return avalis
}
export const getOneAvali = async (id) => {
    const avalis = await avaliacoesRepo.getOneAvali(id)
    return avalis
}