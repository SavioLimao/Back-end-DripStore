import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const allAvaliacoes = async () => {
  const avalis = await prisma.avaliacoes.findMany();
  return avalis;
};

export const getOneAvali = async (id) => {
  const avaliacao = await prisma.avaliacoes.findUnique({
    where: {
      id: Number(id),
    },
  });
  return avaliacao;
};

export const createAvali = async (comentarios, nota, produto_id, usuario_id) => {
  const newAvali = await prisma.avaliacoes.create({
    data: {
      comentarios,
      nota,
      produto_id,
      usuario_id
    },
  });
  return newAvali
};
export const updateAvali = async (id, comentarios, nota, produto_id, usuario_id) => {
  const newAvali = await prisma.avaliacoes.update({
    where: {
      id: Number(id)
    },
    data: {
      comentarios,
      nota,
      produto_id,
      usuario_id
    }
  });
  return newAvali
};

export const deleteAvali = async (id) => {
  const avali = await prisma.avaliacoes.delete({
    where: {
      id: Number(id)
    }
  })
  return avali
}