import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
async function getUser() {
    const user = await prisma.veiculo.findMany();
    console.log(user);
}

getUser();
