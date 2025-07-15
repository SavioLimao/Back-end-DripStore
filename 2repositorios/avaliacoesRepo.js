import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const allAvaliacoes = async () => {
  const avalis = await prisma.avaliacoes.findMany();
  return avalis;
};

export const getOneAvali = async (id) => {
  const avalis = await prisma.avaliacoes.findUnique({
    where: {
      id:Number(id),
    }
  });
  return avalis;
};
