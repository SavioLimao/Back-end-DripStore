import * as usuarioRepo from "../2repositorios/usuarioRepositorio.js";

export const allUsers = async () => {
  const users = await usuarioRepo.allUsers();
  return users;
};
export const getOneU = async (id) => {
  const user = await usuarioRepo.getOneU(id);
  return user;
};
export const postU = async (nome, cpf, email, senha, telefone, nascimento) => {
  const newUser = await usuarioRepo.postU(
    nome,
    cpf,
    email,
    senha,
    telefone,
    nascimento
  );
  return newUser;
};
export const putU = async (id, nome, cpf, email, senha, telefone, nascimento) => {
  const upatedU = await usuarioRepo.putU(
    id,
    nome,
    cpf,
    email,
    senha,
    telefone,
    nascimento
  );
  return upatedU;
};

export const dellU = async (id) => {
    const result = await usuarioRepo.dellU(id)
    return result
}