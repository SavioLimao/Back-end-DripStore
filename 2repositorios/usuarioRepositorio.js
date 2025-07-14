import connection from "../1bancoDeDados/connection.js";




export const allUsers = async () => {
  const [users] = await connection.query("SELECT * FROM usuarios");
  return users;
};
export const getOneU = async (id) => {
  const [user] = await connection.query("SELECT * FROM usuarios WHERE id = ?", [
    id,
  ]);
  return user[0];
};
export const postU = async (nome, cpf, email, senha, telefone, nascimento) => {
  const [newUser] = await connection.query(
    "INSERT INTO usuarios (nome, cpf, email, senha, telefone, nascimento) VALUES (?,?,?,?,?,?)",
    [nome, cpf, email, senha, telefone, nascimento]
  );
  return {
    id: newUser.insertId,
    nome,
    cpf,
    email,
    senha,
    telefone,
    nascimento
  };
};

export const putU = async (id, nome, cpf, email, senha, telefone, nascimento) => {
    const [upatedU] = await connection.query(`UPDATE usuarios SET nome=?, cpf=?, email=?, senha=?, telefone=?, nascimento=? WHERE id = ?`, [nome, cpf, email, senha, telefone, nascimento, id])
    return upatedU.affectedRows
}

export const dellU = async (id) => {
const [result] = await connection.query("DELETE FROM usuarios WHERE id = ?", [id])
return result
}