import * as usuarioServ from "../3servicos/usuarioServicos.js";

export const allUsers = async (req, res) => {
  try {
    const users = await usuarioServ.allUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(`Erro de conexão ${error}`);
  }
};
export const getOneU = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usuarioServ.getOneU(id);
    if (!id || !user) {
      return res.status(404).send(`Usuario não encontrado`);
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(`Usuário foi pras cucúias ${error}`);
  }
};

export const postU = async (req, res) => {
  const { nome, cpf, email, senha, telefone, nascimento } = req.body;
  try {
    const newUser = await usuarioServ.postU(
      nome,
      cpf,
      email,
      senha,
      telefone,
      nascimento
    );
    return res.status(200).send(newUser);
  } catch (error) {
    return res
      .status(500)
      .send(`Nossa, isso nunca me aconteceu antes... Erro (${error}) :(`);
  }
};
export const putU = async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, email, senha, telefone, nascimento } = req.body;
  try {
    const upatedU = await usuarioServ.putU(
      id,
      nome,
      cpf,
      email,
      senha,
      telefone,
      nascimento
    );
    if (!upatedU) {
      return res.status(404).send("Usuario não encontrado");
    }
    const upatedRes = await usuarioServ.getOneU(id);
    return res.status(200).json(upatedRes);
  } catch (error) {
    return res.status(500).send(`Erro ao alterar usuario(s) (${error}) D:`);
  }
};

export const dellU = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await usuarioServ.dellU(id);
    if (result.affectedRows === 0) {
        return res.status(404).send(`Usuário ${id} não encontrado.`) 
    }
    return res.status(200).send(`Usuario ${id} ELIMINADO! X(`);
  } catch (error) {
    return res.status(500).send(`Erro ao buscar usuários: ${error}`);
  }
};
