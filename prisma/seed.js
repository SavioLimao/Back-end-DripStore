// ESSE ARQUIVO É DESTINADO APENAS PARA TESTES,
// pode ser deletado sem nenhum problema






import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


(async () => {
    const user2 = await prisma.usuarios.create({
        data: {
            nome: "Json da Silva",
            cpf: "66666666999",
            email: "json@prisma.com.br",
            senha: "1234567",
            telefone: "8598745445",
            nascimento: new Date("2000-06-07 12:00:00")
          },
        });
        console.log(user2);
      })();
      
      (async () => {
        const users = await prisma.usuarios.count();
        console.log(users);
      })();