import connection from "../1bancoDeDados/connection.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const allUsers = async () => {
  const users = await prisma.usuarios.findMany();
  return users;
};
export const getOneU = async (id) => {
  const user = await prisma.usuarios.findUnique({
    where: {
      id: Number(id),
    },
  });
  return user;
};
export const postU = async (nome, cpf, email, senha, telefone, nascimento) => {
  const newUser = await prisma.usuarios.create({
    data: {
      nome,
      cpf,
      email,
      senha,
      telefone,
      nascimento,
    },
  });
  return newUser;
};

export const putU = async (nome, cpf, email, senha, telefone, nascimento) => {
  const upatedU = await prisma.usuarios.update({
    where: {
      id: Number(id),
    },
    data: {
      nome,
      cpf,
      email,
      senha,
      telefone,
      nascimento,
    },
  });
  return upatedU;
};

export const dellU = async (id) => {
  const result = await prisma.usuarios.delete({
    where: {
      id: Number(id)
    }
  })
  return result;
};
